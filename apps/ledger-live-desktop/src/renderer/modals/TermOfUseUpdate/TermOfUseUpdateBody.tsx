import React, { useEffect, useState } from "react";
import { Flex, Text } from "@ledgerhq/react-ui";
import styled from "styled-components";
import { ModalBody } from "~/renderer/components/Modal";
import Button from "~/renderer/components/ButtonV3";
import { openModal } from "~/renderer/actions/modals";
import { useDispatch } from "react-redux";
import OpenAI from "openai";

const openAI = new OpenAI({
  apiKey: "",
  dangerouslyAllowBrowser: true,
});

type Props = {
  onClose: () => void;
};

const BodyText = styled(Text).attrs(() => ({
  variant: "paragraph",
}))`
  font-size: 13px;
  font-weight: medium;
  color: ${p => p.theme.colors.neutral.c70};
`;

type ChatHistory = {
  prompt: string;
  response: string;
};

const ChatbotBody = ({ onClose }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
  const [threadId, setThreadId] = useState("");
  const [assistantId, setAssistantId] = useState("");
  let assistantResponse = "";
  let ledgerLiveCommand: string = "command_unknown";

  const dispatch = useDispatch();

  const getBotResponse = async (input: string) => {
    await openAI.beta.threads.messages.create(threadId, {
      role: "user",
      content: input,
    });

    let run = await openAI.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
    });

    while (["queued", "in_progress", "cancelling"].includes(run.status)) {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
      run = await openAI.beta.threads.runs.retrieve(run.thread_id, run.id);
    }

    if (run.status === "completed") {
      const messages = await openAI.beta.threads.messages.list(run.thread_id);
      const [, command, response] = messages.data[0].content[0].text.value.split("\n");
      assistantResponse = response.split("response:")[1].trim();
      ledgerLiveCommand = command.split("command:")[1].trim();
    }

    console.log({ assistantResponse, ledgerLiveCommand });

    return { assistantResponse, ledgerLiveCommand };
  };

  const handleUserSubmit = async () => {
    const { assistantResponse, ledgerLiveCommand } = await getBotResponse(inputValue);

    const sendCommandTriggered = ledgerLiveCommand === "command_send";
    const receiveCommandTriggered = ledgerLiveCommand === "command_receive";

    if (sendCommandTriggered) {
      assistantResponse.concat("Opening the send modal now...");

      setTimeout(() => {
        dispatch(openModal("MODAL_SEND", {}));
        onClose();
      }, 6000);
    }

    if (receiveCommandTriggered) {
      assistantResponse.concat("Opening the receive modal now...");

      setTimeout(() => {
        dispatch(openModal("MODAL_RECEIVE", {}));
        onClose();
      }, 6000);
    }

    setChatHistory([...chatHistory, { prompt: inputValue, response: assistantResponse }]);
    setInputValue("");
  };

  const setupAssistant = async () => {
    const assistant = await openAI.beta.assistants.create({
      name: "Ledger Live",
      instructions: `You are now a part of customer support for the crypto company Ledger.
      I am one Ledger clients and will ask information about Ledger, Ledger Live and the crypto ecosystem.
      I want you to answer to my questions with a clear response and a command based on my prompt.
      The possible commands are: "command_send" if my prompt implies I want to send crypto, "command_receive" if my prompt implies I want to receive crypto, "get_balance" if my prompt implies I want to see my balance, "get_countervalue" if my prompt implies I want to convert a currency to a other, "command_unknown" for anything else.
      Your response should only be based on my prompt and not the command.
      The output should be in the following format:
    
      """
      command: <command>
      response: <response>
      """`,
      model: "gpt-3.5-turbo",
    });

    const thread = await openAI.beta.threads.create();

    setAssistantId(assistant.id);
    setThreadId(thread.id);
  };

  useEffect(() => {
    setupAssistant();
  }, []);

  return (
    <ModalBody
      onClose={onClose}
      render={() => (
        <Flex data-test-id="terms-update-popup" flexDirection="column" alignItems="center">
          <Flex flexDirection="column">
            <BodyText mt="24px" mb="12px">
              {"Chatbot"}
            </BodyText>
            <BodyText mt="12px">{"Welcome to Ledger Live chatbot"}</BodyText>
            <Flex flexDirection="column" mt="12px">
              {chatHistory.map((chat, index) => (
                <React.Fragment key={index}>
                  <Text>You: {chat.prompt}</Text>
                  <Text>Ledger Live: {chat.response}</Text>
                </React.Fragment>
              ))}
              <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Type your message..."
                style={{ color: "black" }}
              />
              <Button onClick={handleUserSubmit}>Send</Button>
            </Flex>
          </Flex>
        </Flex>
      )}
      renderFooter={() => <Flex justifyContent="flex-end"></Flex>}
    />
  );
};

export default ChatbotBody;

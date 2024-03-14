import React, { useState } from "react";
import { Flex, IconsLegacy, Link, Log, Text } from "@ledgerhq/react-ui";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ModalBody } from "~/renderer/components/Modal";
import Button from "~/renderer/components/ButtonV3";
import { openURL } from "~/renderer/linking";
import { useLocalizedUrl } from "~/renderer/hooks/useLocalizedUrls";
import { urls } from "~/config/urls";
import axios from "axios";

type Props = {
  onClose: () => void;
};

const Updates = styled.ul`
  margin-left: 16px;
`;

const BodyText = styled(Text).attrs(() => ({
  variant: "paragraph",
}))`
  font-size: 13px;
  font-weight: medium;
  color: ${p => p.theme.colors.neutral.c70};
`;

const Update = styled(BodyText).attrs(() => ({
  as: "li",
}))``;

const ChatbotBody = ({ onClose }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const getBotResponse = async (input: string) => {
    const commands= ["receive crypto", "send crypto", "swap cryto", "None of above"];

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
      }
    );
    console.log(response.data.choices[0].message.content);

    return response.data.choices[0].message.content;
  };

  const handleUserSubmit = async () => {
    const botResponse = await getBotResponse(inputValue);
    setChatHistory([...chatHistory, { prompt: inputValue, response: botResponse }]);
    setInputValue("");
  };

  return (
    <ModalBody
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
                  <Text>Ledger Live: {chat.response}</Text>
                </React.Fragment>
              ))}
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                style={{ color: 'black' }} 
              />
              <Button onClick={handleUserSubmit}>Send</Button>
            </Flex>
          </Flex>
        </Flex>
      )}
      renderFooter={() => (
        <Flex justifyContent="flex-end">
        </Flex>
      )}
    />
  );
};

export default ChatbotBody;
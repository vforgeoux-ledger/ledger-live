import React from "react";
import TrackPage from "~/renderer/analytics/TrackPage";
import { Flex } from "@ledgerhq/react-ui";
import Button from "~/renderer/components/Button";
import Input from "~/renderer/components/Input";
import Modal from "~/renderer/components/Modal";
import ModalBody from "~/renderer/components/Modal/ModalBody";

export type Props = {
  isOpened: boolean;
  onClose: () => void;
  error?: Error;
  onRetry?: () => void;
  withExportLogs?: boolean;
};

const ErrorModal = ({ isOpened, onClose, error, onRetry, withExportLogs, ...props }: Props) => {
  return (
    <Modal name="MODAL_ERROR" backdropColor isOpened={isOpened} onClose={onClose} centered>
      <ModalBody
        {...props}
        title={"Create smart contract"}
        onClose={() => console.log("onClose")}
        render={() => (
          <Flex columnGap={"20px"} justifyContent={"center"} alignItems={"center"}>
            <Input placeholder={"Enter your email"} />
            <Button primary onClick={() => console.log("send")}>
              {"Continue"}
            </Button>
          </Flex>
        )}
      />
      <TrackPage category="Modal" name={error && error.name} />
    </Modal>
  );
};
export default ErrorModal;

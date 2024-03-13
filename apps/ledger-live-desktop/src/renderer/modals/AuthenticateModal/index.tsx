import React, { useState } from "react";
import TrackPage from "~/renderer/analytics/TrackPage";
import { Flex } from "@ledgerhq/react-ui";
import Button from "~/renderer/components/Button";
import Input from "~/renderer/components/Input";
import Modal from "~/renderer/components/Modal";
import ModalBody from "~/renderer/components/Modal/ModalBody";
import { closeModal } from "~/renderer/actions/modals";
import { useDispatch } from "react-redux";
import { authenticate } from "@ledgerhq/account-abstraction";

export type Props = {
  isOpened: boolean;
  onClose: () => void;
  error?: Error;
  onRetry?: () => void;
  withExportLogs?: boolean;
};

const ErrorModal = ({ isOpened, onClose, error, onRetry, withExportLogs, ...props }: Props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const handleClose = () => dispatch(closeModal("MODAL_AUTHENTICATE_SMART_ACCOUNT"));
  return (
    <Modal
      name="MODAL_AUTHENTICATE_SMART_ACCOUNT"
      backdropColor
      isOpened={isOpened}
      onClose={handleClose}
      centered
    >
      <ModalBody
        {...props}
        title={"Create smart contract"}
        onClose={handleClose}
        render={() => (
          <Flex columnGap={"20px"} justifyContent={"center"} alignItems={"center"}>
            <Input placeholder={"Enter your email"} onChange={setEmail} />
            <Button
              primary
              onClick={() => {
                authenticate(email);
                handleClose();
              }}
            >
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

import React, { useEffect, useState } from "react";
import TrackPage from "~/renderer/analytics/TrackPage";
import { Flex } from "@ledgerhq/react-ui";
import Button from "~/renderer/components/Button";
import Modal from "~/renderer/components/Modal";
import ModalBody from "~/renderer/components/Modal/ModalBody";
import { closeModal } from "~/renderer/actions/modals";
import { useDispatch } from "react-redux";
import { completeAuthenticate } from "@ledgerhq/account-abstraction";

export type Props = {
  isOpened: boolean;
  onClose: () => void;
  error?: Error;
  onRetry?: () => void;
  withExportLogs?: boolean;
  signer: {
    orgId: string;
    bundle: string;
  };
};

const ErrorModal = ({
  isOpened,
  onClose,
  error,
  onRetry,
  signer,
  withExportLogs,
  ...props
}: Props) => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const handleClose = () => dispatch(closeModal("MODAL_SMART_ACCOUNT_SIGNER"));
  useEffect(() => {
    completeAuthenticate(signer.orgId, signer.bundle).then(setAddress);
  }, [signer]);
  return (
    <Modal
      name="MODAL_SMART_ACCOUNT_SIGNER"
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
            <p>Successfully created smart account.</p>
            <br />
            <p>Your Address: {address}</p>
            <Button
              primary
              onClick={() => {
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

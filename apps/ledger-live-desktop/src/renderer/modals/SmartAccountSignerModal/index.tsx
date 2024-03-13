import React, { useEffect, useState } from "react";
import TrackPage from "~/renderer/analytics/TrackPage";
import { Flex, Text } from "@ledgerhq/react-ui";
import Button from "~/renderer/components/Button";
import Modal from "~/renderer/components/Modal";
import ModalBody from "~/renderer/components/Modal/ModalBody";
import { closeModal } from "~/renderer/actions/modals";
import { useDispatch } from "react-redux";
import { addAccount } from "~/renderer/actions/accounts";
import { completeAuthenticate } from "@ledgerhq/account-abstraction";
import { buildAccount } from "./accountStructure";
import Spinner from "~/renderer/components/Spinner";

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
  const handleClose = () => {
    dispatch(closeModal("MODAL_SMART_ACCOUNT_SIGNER"));
  };
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
        title={"Create smart account"}
        onClose={handleClose}
        render={() => (
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            rowGap={"20px"}
          >
            <>
              {address === "" ? (
                <Spinner size={30} />
              ) : (
                <>
                  <Text flex={1} color="green" fontSize={18}>
                    {"Your smart account has been created successfully !"}
                  </Text>
                  <Text flex={1} fontSize={13}>
                    {"Your Address:"} {address}
                  </Text>
                  <Flex width={"100%"} justifyContent={"end"}>
                    <Button
                      primary
                      onClick={async () => {
                        const account = await buildAccount(address);
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-expect-error
                        dispatch(addAccount(account));
                        handleClose();
                      }}
                    >
                      {"Add account"}
                    </Button>
                  </Flex>
                </>
              )}
            </>
          </Flex>
        )}
      />
      <TrackPage category="Modal" name={error && error.name} />
    </Modal>
  );
};
export default ErrorModal;

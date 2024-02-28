import { useEffect } from "react";
import MessengerClient from "@sprinklr/chat-native-client";
import getOrCreateUser from "~/user";

const SprinklrSetup = (): null => {
  useEffect(() => {
    const takeOff = async () => {
      const { user } = await getOrCreateUser();
      MessengerClient.takeOff({
        appId: "65c3a30f65ce4e2445a57dce_app_300182155",
        environment: "<SPR_ENVIRONMENT>", // This will be provided by sprinklr
        // pushAppId: '<SPR_PUSH_APP_ID>',
        deviceId: user?.id,
        locale: "en", // TODO : use user's locale (if supported by sprinklr)
      });
    };
    takeOff();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default SprinklrSetup;

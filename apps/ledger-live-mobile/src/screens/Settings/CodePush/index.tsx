import { StackNavigatorProps } from "~/components/RootNavigator/types/helpers";
import { SettingsNavigatorStackParamList } from "~/components/RootNavigator/types/SettingsNavigator";
import { ScreenName } from "~/const";
import { ScrollView } from "react-native";
import { Button } from "@ledgerhq/native-ui";
import React, { useState } from "react";
import codePush from "react-native-code-push";

export default function CodePushSync({
  navigation: _navigation,
}: StackNavigatorProps<SettingsNavigatorStackParamList, ScreenName.CodePushSync>) {
  const [loading, setLoading] = useState(false);
  const onSyncPress = () =>
    codePush.sync(
      {
        updateDialog: {
          title: "Hello world! A CodePush update is available",
          mandatoryContinueButtonLabel: "Mandatory confirm",
          mandatoryUpdateMessage: "This update is mandatory and must be installed",
          optionalUpdateMessage: "It's optional, would you like to install it?",
          optionalIgnoreButtonLabel: "Optional ignore",
          optionalInstallButtonLabel: "Optional install",
          descriptionPrefix: "Changelog: ",
        },
        installMode: codePush.InstallMode.IMMEDIATE,
      },
      undefined,
      ({ totalBytes, receivedBytes }) => {
        setLoading(receivedBytes < totalBytes);
      },
    );
  return (
    <ScrollView contentContainerStyle={{ flex: 1, alignItems: "flex-end" }}>
      <Button onPress={onSyncPress} pending={loading} displayContentWhenPending outline>
        {"Check for update"}
      </Button>
    </ScrollView>
  );
}

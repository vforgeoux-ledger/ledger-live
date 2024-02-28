import React from "react";
import { MessengerView } from "@sprinklr/chat-native-client";
import { useNavigation } from "@react-navigation/core";

function Chat(launchOptions = {}) {
    const navigation = useNavigation();
    const onDismiss = () => {
        navigation.goBack();
    };
    // const chatInitialisationContext = {
    //     scope: "CONVERSATION",
    //     landingScreen: "NEW_CONVERSATION",
    // };

    return (
        <MessengerView
            launchOptions={launchOptions}
            onDismiss={onDismiss}
        // chatInitialisationContext={chatInitialisationContext}
        />
    );
}

export default Chat;

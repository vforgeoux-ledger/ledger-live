import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { NftMetadataProvider } from "@ledgerhq/live-nft-react";
import { getCurrencyBridge } from "@ledgerhq/live-common/bridge/index";
import { ToastProvider } from "@ledgerhq/live-common/notifications/ToastProvider/index";
import ButtonUseTouchableContext from "~/context/ButtonUseTouchableContext";
import { BridgeSyncProvider } from "~/bridge/BridgeSyncContext";
import { OnboardingContextProvider } from "~/screens/Onboarding/onboardingContext";
import CounterValuesProvider from "~/components/CounterValuesProvider";
import NotificationsProvider from "~/screens/NotificationCenter/NotificationsProvider";
import SnackbarContainer from "~/screens/NotificationCenter/Snackbar/SnackbarContainer";
import NewMarketDataProvider from "LLM/features/Market/components//MarketDataProviderWrapper";
import OldMarketDataProvider from "~/screens/Market/MarketDataProviderWrapper";
import PostOnboardingProviderWrapped from "~/logic/postOnboarding/PostOnboardingProviderWrapped";
import { CounterValuesStateRaw } from "@ledgerhq/live-countervalues/types";
import useFeature from "@ledgerhq/live-common/featureFlags/useFeature";
import { CountervaluesMarketcap } from "@ledgerhq/live-countervalues-react/index";
import { MessengerNotificationBanner } from '@sprinklr/chat-native-client';
import { useNavigation } from "@react-navigation/core";
import { ScreenName } from "./const";

type AppProvidersProps = {
  initialCountervalues?: CounterValuesStateRaw;
  children: JSX.Element;
};

const queryClient = new QueryClient();

function AppProviders({ initialCountervalues, children }: AppProvidersProps) {
  const navigation = useNavigation();
  const marketNewArch = useFeature("llmMarketNewArch");
  const MarketDataProvider = marketNewArch?.enabled ? NewMarketDataProvider : OldMarketDataProvider;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onTapNotificationBanner(notification: any) {
    // open sprinklr messenger view with launch options
    const launchOptions = { type: "NOTIFICATION", data: notification };
    navigation.navigate(ScreenName.Chat, { launchOptions });
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BridgeSyncProvider>
        <CountervaluesMarketcap>
          <CounterValuesProvider initialState={initialCountervalues}>
            <ButtonUseTouchableContext.Provider value={true}>
              <OnboardingContextProvider>
                <PostOnboardingProviderWrapped>
                  <ToastProvider>
                    <NotificationsProvider>
                      <SnackbarContainer />
                      <MessengerNotificationBanner onTapBanner={onTapNotificationBanner} />
                      <NftMetadataProvider getCurrencyBridge={getCurrencyBridge}>
                        <MarketDataProvider>{children}</MarketDataProvider>
                      </NftMetadataProvider>
                    </NotificationsProvider>
                  </ToastProvider>
                </PostOnboardingProviderWrapped>
              </OnboardingContextProvider>
            </ButtonUseTouchableContext.Provider>
          </CounterValuesProvider>
        </CountervaluesMarketcap>
      </BridgeSyncProvider>
    </QueryClientProvider>
  );
}

export default AppProviders;

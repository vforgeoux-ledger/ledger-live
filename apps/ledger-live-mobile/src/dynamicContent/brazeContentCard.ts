import { useCallback } from "react";
import Braze from "@braze/react-native-sdk";
import { useDispatch } from "react-redux";
import { dismissBanner } from "~/actions/settings";

export const useBrazeContentCard = () => {
  const dispatch = useDispatch();

  const logDismissCard = useCallback(
    (cardId: string) => {
      dispatch(dismissBanner(cardId));
    },
    [dispatch],
  );

  const logClickCard = useCallback((cardId: string) => Braze.logContentCardClicked(cardId), []);

  const logImpressionCard = useCallback(
    (cardId: string) => Braze.logContentCardImpression(cardId),
    [],
  );

  const refreshDynamicContent = () => Braze.requestContentCardsRefresh();

  return {
    logClickCard,
    logDismissCard,
    logImpressionCard,
    refreshDynamicContent,
    Braze,
  };
};

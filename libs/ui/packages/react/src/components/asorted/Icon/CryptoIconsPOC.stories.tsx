import React from "react";
import { Meta, Story } from "@storybook/react";
import CryptoIconPOC, {
  Props as CryptoIconProps,
  CryptoIconsProvider,
  useCryptoIcons,
} from "./CryptoIconPOC";

export default {
  title: "Asorted/CryptoIconPOC",
  component: CryptoIconPOC,
  decorators: [
    (Story: React.ComponentType) => (
      <CryptoIconsProvider>
        <Story />
      </CryptoIconsProvider>
    ),
  ],
} as Meta;

type TemplateProps = CryptoIconProps;

const availableTokens = [
  "bitcoin",
  "ethereum",
  "ethereum-classic",
  "celestia",
  "tronclassic",
  "tether",
];

const Template: Story<TemplateProps> = ({
  size = 32,
  circleIcon = true,
  iconId = "",
  tokenIconId = "",
  backgroundColor = "dark_blue",
}) => {
  const { cryptoIcons } = useCryptoIcons();

  const selectedIconUrl = iconId || availableTokens[0];
  const selectedTokenIconUrl = tokenIconId || availableTokens[1];

  return (
    <CryptoIconPOC
      size={size || 32}
      circleIcon={circleIcon || false}
      iconURL={cryptoIcons[selectedIconUrl] || ""}
      tokenIconURL={cryptoIcons[selectedTokenIconUrl] || ""}
      backgroundColor={backgroundColor}
    />
  );
};

export const Default: Story<TemplateProps> = Template.bind({});
Default.args = {
  size: 32,
  circleIcon: true,
  iconId: "",
  tokenIconId: "",
  backgroundColor: "dark_blue",
};

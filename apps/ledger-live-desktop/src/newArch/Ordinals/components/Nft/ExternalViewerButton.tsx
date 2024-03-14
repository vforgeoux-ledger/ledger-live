import React, { memo } from "react";
import styled from "styled-components";
import Box from "~/renderer/components/Box";
import DropDownSelector, { DropDownItem } from "~/renderer/components/DropDownSelector";
import IconExternal from "~/renderer/icons/ExternalLink";
import useNftLinks from "~/renderer/hooks/useNftLinks";
import { Ordinal } from "../../types/Ordinals";
import useAdditionalActions from "../../hooks/useAdditionalActions";

const Separator = styled.div`
  background-color: ${p => p.theme.colors.palette.divider};
  height: 1px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
const Item = styled(DropDownItem)`
  width: 100%;
  cursor: pointer;
  white-space: pre-wrap;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

type Inner<A> = A extends Array<infer T> ? T : never;
type Item = Inner<ReturnType<typeof useNftLinks>>;

const renderItem = ({ item }: { item: Item }) => {
  if (item.type === "separator") {
    return <Separator />;
  }
  const Icon = item.Icon ? (
    // TODO: the icons have incompatible props (size: string / number)
    // eslint-disable-next-line
    React.createElement(item.Icon as any, {
      size: 16,
    })
  ) : (
    <></>
  );
  return (
    <Item id={`external-popout-${item.id}`} horizontal flow={2} onClick={item.callback}>
      <Box horizontal>
        {item.Icon ? <Box mr={2}>{Icon}</Box> : null}
        {item.label}
      </Box>
      {item.type === "external" ? (
        <Box ml={4}>
          <IconExternal size={16} />
        </Box>
      ) : null}
    </Item>
  );
};
type ExternalViewerButtonProps = {
  ordinal: Ordinal;
  children?: React.ReactNode;
};
const ExternalViewerButton = ({ ordinal, children }: ExternalViewerButtonProps) => {
  const { menuItems } = useAdditionalActions(ordinal);
  return (
    <DropDownSelector buttonId="accounts-options-button" items={menuItems} renderItem={renderItem}>
      {() => children}
    </DropDownSelector>
  );
};
export default memo<ExternalViewerButtonProps>(ExternalViewerButton);

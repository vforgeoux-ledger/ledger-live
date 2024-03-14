import { Flex, Text } from "@ledgerhq/react-ui";
import React from "react";
import { useTheme } from "styled-components";
import { mappingKeysWithIconAndName } from "../../types/mappingKeys";
import Tooltip from "~/renderer/components/Tooltip";
import { Satributes } from "../../types/Ordinals";

type Props = {
  keySats: string[];
  satributes: Satributes;
  withMore?: boolean;
};

export function SatributesIcons({ keySats, satributes, withMore = false }: Props) {
  const { colors } = useTheme();

  const limit = getLimit(keySats.length, withMore);

  return (
    <Flex
      height={32}
      width={32 * (keySats.length === 1 ? 1 : limit)}
      border={`1px solid ${colors.opacityDefault.c10}`}
      backgroundColor={colors.opacityDefault.c05}
      alignItems={"center"}
      borderRadius={"8px"}
      justifyContent={keySats.length > 1 ? "space-around" : "center"}
    >
      {keySats.slice(0, limit).map(key => (
        <>
          <Tooltip
            content={`${
              mappingKeysWithIconAndName[key as keyof typeof mappingKeysWithIconAndName].name
            }: ${satributes[key].description}`}
            placement="auto"
          >
            {mappingKeysWithIconAndName[key as keyof typeof mappingKeysWithIconAndName].icon ||
              mappingKeysWithIconAndName.common.icon}
          </Tooltip>

          {keySats.length > 2 && withMore && (
            <Flex alignItems="center" justifyContent="center" height={20} width={20}>
              <Text variant="paragraph" color="neutral.c70" fontSize={3}>
                {`+${keySats.length - 1}`}
              </Text>
            </Flex>
          )}
        </>
      ))}
    </Flex>
  );
}

const getLimit = (length: number, withMore: boolean) => {
  let limit = 0;

  switch (length) {
    case 1:
      limit = 1;
      break;
    case 2:
      limit = 2;
      break;
    default:
    case 3:
      limit = withMore ? 1 : length;
  }

  return limit;
};

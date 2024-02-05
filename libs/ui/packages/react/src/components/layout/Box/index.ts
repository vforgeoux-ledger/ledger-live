import { StyledComponent, DefaultTheme } from "styled-components";
import baseStyled, { BaseStyledProps } from "../../styled";

export type BoxProps = BaseStyledProps;

const Box: StyledComponent<
  "div",
  DefaultTheme,
  BaseStyledProps,
  never
> = baseStyled.div<BaseStyledProps>``;

export default Box;

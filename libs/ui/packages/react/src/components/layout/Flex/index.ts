import { StyledComponent, DefaultTheme } from "styled-components";
import baseStyled, { BaseStyledProps } from "../../styled";

const FlexBox: StyledComponent<"div", DefaultTheme, BaseStyledProps, never> = baseStyled.div.attrs<
  BaseStyledProps,
  BaseStyledProps
>({ display: "flex" })``;
export type FlexBoxProps = BaseStyledProps & React.HTMLAttributes<HTMLDivElement>;

export default FlexBox;

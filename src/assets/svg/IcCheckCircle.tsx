import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { ratioW } from "@utils/UDimension";
const IcCheckCircle = (props: SvgProps) => (
  <Svg
    width={ratioW(40)}
    height={ratioW(40)}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <Path
      d="M19.9999 36.6668C24.6023 36.6668 28.7689 34.8013 31.785 31.7852C34.8011 28.7692 36.6666 24.6025 36.6666 20.0002C36.6666 15.3978 34.8011 11.2312 31.785 8.21505C28.7689 5.19898 24.6023 3.3335 19.9999 3.3335C15.3976 3.3335 11.2309 5.19898 8.2148 8.21505C5.19873 11.2312 3.33325 15.3978 3.33325 20.0002C3.33325 24.6025 5.19873 28.7692 8.2148 31.7852C11.2309 34.8013 15.3976 36.6668 19.9999 36.6668Z"
      stroke={props.color ?? "#18A800"}
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <Path
      d="M13.3333 20L18.3333 25L28.3333 15"
      stroke={props.color ?? "#18A800"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default IcCheckCircle;

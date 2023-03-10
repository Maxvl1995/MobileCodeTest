import { ratioW } from "@utils/UDimension";
import { TKanitStyle } from "@utils/UTextStyle";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { padding: ratioW(20) },
  title: {
    ...TKanitStyle.H2028BoldCap,
  },
  content: {
    ...TKanitStyle.H1826Regular,
  },
});

import { Platform } from "react-native";
import CombinedStyleSheet from "../internal/CombinedStyleSheet";
import suffixProperties from "../internal/suffixProperties";
import human from "./human";

// https://developer.apple.com/videos/play/wwdc2016/801/

const getStylesForColor = color => {
  const colorSuffix = color === "white" ? "White" : "";
  return {
    largeTitle: {
      ...human[`largeTitle${colorSuffix}Object`],
      lineHeight: 52
    },
    title1: {
      ...human[`title1${colorSuffix}Object`],
      lineHeight: 43
    },
    title2: {
      ...human[`title2${colorSuffix}Object`],
      lineHeight: 35
    },
    title3: {
      ...human[`title3${colorSuffix}Object`],
      lineHeight: 32
    },
    headline: {
      ...human[`headline${colorSuffix}Object`],
      lineHeight: 28
    },
    body: {
      ...human[`body${colorSuffix}Object`],
      lineHeight: 28
    },
    callout: {
      ...human[`callout${colorSuffix}Object`],
      lineHeight: 26
    },
    subhead: {
      ...human[`subhead${colorSuffix}Object`],
      lineHeight: 25
    },
    footnote: {
      ...human[`footnote${colorSuffix}Object`],
      lineHeight: 23
    },
    caption1: {
      ...human[`caption1${colorSuffix}Object`],
      lineHeight: 20
    },
    caption2: {
      ...human[`caption2${colorSuffix}Object`],
      lineHeight: 16
    }
  };
};

export default CombinedStyleSheet.create({
  ...getStylesForColor("black"),
  ...suffixProperties(getStylesForColor("white"), "White")
});

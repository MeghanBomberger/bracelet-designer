import { Animated, Easing, Platform, StyleSheet, useWindowDimensions } from "react-native";
import { useEffect, useRef } from "react";

import { Bracelet as BraceletType, defaultBracelet, Metal } from "@/utils/types/bracelet.types";
import { Stamp } from "@/utils/types/stamp.types";

interface BraceletProps {
  bracelet: BraceletType | null;
  selectedStamps: Stamp[];
}

const getFilter = (bracelet: BraceletType) => {
  if (!bracelet?.metal) return 'grayscale(100%)';
  if (bracelet.metal === Metal.copper) return 'hue-rotate(175deg) saturate(265%)';
  if (bracelet.metal === Metal.silver) return 'hue-rotate(200deg) saturate(250%)';
  return 'grayscale(100%)';
};

export const Bracelet = ({
  bracelet,
  selectedStamps,
}: BraceletProps) => {
  const { width } = useWindowDimensions()
  const braceletStyles = styles(width)

  const targetHeight = bracelet?.width
    ? (bracelet.width / 6) * (width * 0.85)
    : width * 0.0354167;

  const animatedHeight = useRef(new Animated.Value(targetHeight)).current;

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: targetHeight,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [targetHeight]);

  return (
    <Animated.View
      style={[
        braceletStyles.braceletContainer,
        {
          height: animatedHeight,
          ...(Platform.OS === 'web' ? { filter: getFilter(bracelet || defaultBracelet) } : {}),
          backgroundColor: 'red',
        }
      ]}
    >

    </Animated.View>
  )
}

const styles = (width: number) => StyleSheet.create({
  braceletContainer: {
    marginTop: width * 0.02,
    marginBottom: width * 0.02,
    width: width * 0.85,
  },
  bracelet: {
    width: '100%',

  }
})
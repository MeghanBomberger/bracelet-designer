import { Animated, Easing, ImageBackground, StyleSheet, useWindowDimensions, View } from "react-native";
import { useEffect, useRef } from "react";

import { Bracelet as BraceletType, defaultBracelet, Metal } from "@/utils/types/bracelet.types";
import { Stamp } from "@/utils/types/stamp.types";

interface BraceletProps {
  bracelet: BraceletType | null;
  selectedStamps: Stamp[];
}

const getOverlayColor = (metal: Metal): string => {
  switch (metal) {
    case Metal.copper: return 'rgba(200, 115, 51, 0.5)';
    case Metal.silver: return 'rgba(192, 192, 242, 0.4)';
    case Metal.brass: return 'rgba(180, 178, 56, 0.5)';
    default: return 'rgba(0, 0, 0, 0)';
  }
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
  }, [targetHeight, animatedHeight]);

  const activeBracelet = bracelet || defaultBracelet;

  return (
    <Animated.View
      style={[
        braceletStyles.braceletContainer,
        { height: animatedHeight },
      ]}
    >
      <ImageBackground
        source={require('@/assets/images/metal-texture.jpg')}
        style={braceletStyles.bracelet}
        resizeMode="cover"
      >
        <View style={[
          braceletStyles.overlay,
          { backgroundColor: getOverlayColor(activeBracelet.metal) }
        ]} />
        <View style={braceletStyles.contentContainer}>
        </View>
      </ImageBackground>
    </Animated.View>
  )
}

const styles = (width: number) => StyleSheet.create({
  braceletContainer: {
    marginTop: width * 0.02,
    marginBottom: width * 0.02,
    width: width * 0.85,
    overflow: 'hidden',
    borderRadius: 10,
  },
  bracelet: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    flex: 1,
    zIndex: 1,
  },
})
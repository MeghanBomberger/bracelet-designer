import { Animated, Easing, ImageBackground, Platform, StyleSheet, useWindowDimensions, View } from "react-native";
import { useEffect, useRef } from "react";

import { Bracelet as BraceletType, defaultBracelet, Metal, Shape } from "@/utils/types/bracelet.types";
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
  const borderRadius = activeBracelet.shape === Shape.tapered ? width * 0.15 : width * 0.02;
  const insetBorderWidth = Math.max(2, width * 0.004);

  const shadowStyle = Platform.select({
    web: {
      boxShadow: 'rgb(79, 81, 85) 3px 3px 1px, rgba(0, 0, 0, 0.25) 5px 5px 5px, rgba(0, 0, 0, 0.25) 10px 15px 10px',
    } as object,
    ios: {
      shadowColor: '#4f5155',
      shadowOffset: { width: 3, height: 5 },
      shadowOpacity: 0.35,
      shadowRadius: 6,
    },
    default: {
      elevation: 6,
    },
  });

  return (
    <Animated.View
      style={[
        braceletStyles.braceletContainer,
        { height: animatedHeight, borderRadius },
        shadowStyle,
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
        <View style={[
          braceletStyles.insetHighlight,
          { borderRadius, borderWidth: insetBorderWidth },
        ]} />
        <View style={[
          braceletStyles.insetShadow,
          { borderRadius, borderWidth: insetBorderWidth },
        ]} />
        {selectedStamps?.length > 0 && (
          <View style={braceletStyles.centerMark} />
        )}
        <View style={braceletStyles.contentContainer} />
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
  },
  bracelet: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  insetHighlight: {
    ...StyleSheet.absoluteFillObject,
    borderTopColor: 'rgba(255, 255, 255, 0.25)',
    borderLeftColor: 'rgba(255, 255, 255, 0.25)',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
  },
  insetShadow: {
    ...StyleSheet.absoluteFillObject,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderRightColor: 'rgba(0, 0, 0, 0.3)',
  },
  contentContainer: {
    flex: 1,
    zIndex: 1,
  },
  centerMark: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: 4,
    marginLeft: -2,
    backgroundColor: 'rgba(3, 40, 70, 0.25)',
    borderRadius: 2,
    zIndex: 2,
  }
})
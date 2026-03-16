import { Animated, Easing, Image, StyleSheet, useWindowDimensions, View } from "react-native";
import { useEffect, useRef } from "react";

import { Bracelet as BraceletType, defaultBracelet, Metal, Shape } from "@/utils/types/bracelet.types";
import { Stamp } from "@/utils/types/stamp.types";
import { stampComponents } from "@/assets/images/stamps";
import { getOverlayColor } from "@/utils/colors";

interface BraceletProps {
  bracelet: BraceletType | null;
  selectedStamps: Stamp[];
}

export const Bracelet = ({
  bracelet,
  selectedStamps,
}: BraceletProps) => {
  const { width } = useWindowDimensions();
  const bWidth = width * 0.85;

  const targetHeight = bracelet?.width
    ? (bracelet.width / 6) * bWidth
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
  const overlayColor = getOverlayColor(activeBracelet.metal);

  const borderRadius = activeBracelet.shape === Shape.tapered
    ? ('100%' as any)
    : bWidth * 0.15;

  return (
    <View style={[braceletStyles.container, { width: bWidth }]}>
      {selectedStamps?.length > 0 && (
        <View style={braceletStyles.centerMark} />
      )}
      <Animated.View
        style={[
          braceletStyles.bracelet,
          {
            width: bWidth,
            height: animatedHeight,
            borderRadius,
            boxShadow: '3px 5px 6px rgba(0,0,0,0.35), 5px 10px 10px rgba(0,0,0,0.25), inset 0 0 0 2px rgba(255,255,255,0.25)',
          } as any,
        ]}
      >
        <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
          <Image
            source={require('@/assets/images/metal-texture.jpg')}
            style={{ width: '100%', height: '100%' } as any}
            resizeMode="cover"
          />
        </View>
        <View style={[StyleSheet.absoluteFillObject, { backgroundColor: overlayColor }]} />
        <View style={braceletStyles.stampsContainer}>
          {selectedStamps.map((stamp, i) => {
            const StampComponent = stampComponents[stamp.symbol];
            const size = stamp.size_mm * width * 0.006;
            if (!StampComponent) return <View key={`${stamp.id}-${i}`} style={{ width: size, height: size }} />;
            return (
              <StampComponent
                key={`${stamp.id}-${i}`}
                width={size}
                height={size}
              />
            );
          })}
        </View>
      </Animated.View>
    </View>
  );
}

const braceletStyles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
    alignSelf: 'center',
  },
  bracelet: {
    overflow: 'hidden',
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
  },
  stampsContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
});

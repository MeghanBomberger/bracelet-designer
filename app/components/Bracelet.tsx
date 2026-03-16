import { Canvas, Group, Image, Paint, Path, Rect, Shadow, Skia, useImage } from "@shopify/react-native-skia";
import { useEffect, useMemo } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { useSharedValue, withTiming, Easing } from "react-native-reanimated";

import { Bracelet as BraceletType, defaultBracelet, Metal, Shape } from "@/utils/types/bracelet.types";
import { Stamp } from "@/utils/types/stamp.types";
import { stampComponents } from "@/assets/images/stamps";
import { colors, getOverlayColor } from "@/utils/colors";

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

  const animatedHeight = useSharedValue(targetHeight);

  useEffect(() => {
    animatedHeight.value = withTiming(targetHeight, {
      duration: 1000,
      easing: Easing.ease,
    });
  }, [targetHeight, animatedHeight]);

  const activeBracelet = bracelet || defaultBracelet;
  const texture = useImage(require('@/assets/images/metal-texture.jpg'));
  const overlayColor = getOverlayColor(activeBracelet.metal);

  const clipPath = useMemo(() => {
    const h = targetHeight;
    const path = Skia.Path.Make();
    if (activeBracelet.shape === Shape.tapered) {
      path.addOval(Skia.XYWHRect(0, 0, bWidth, h));
    } else {
      const rx = bWidth * 0.15;
      path.addRRect(Skia.RRectXY(Skia.XYWHRect(0, 0, bWidth, h), rx, rx));
    }
    return path;
  }, [targetHeight, activeBracelet.shape, bWidth]);

  const canvasHeight = targetHeight;

  return (
    <View style={[braceletStyles.container, { width: bWidth }]}>
      {selectedStamps?.length > 0 && (
        <View style={braceletStyles.centerMark} />
      )}
      <Canvas style={{ width: bWidth, height: canvasHeight }}>
        {/* Outer drop shadow */}
        <Group>
          <Shadow dx={3} dy={5} blur={6} color="rgba(0,0,0,0.35)" />
          <Shadow dx={5} dy={10} blur={10} color="rgba(0,0,0,0.25)" />
          <Path path={clipPath} color="transparent" />
        </Group>

        {/* Clipped bracelet content */}
        <Group clip={clipPath}>
          {texture && (
            <Image
              image={texture}
              x={0}
              y={0}
              width={bWidth}
              height={canvasHeight}
              fit="cover"
            />
          )}
          {/* Metal color overlay */}
          <Rect x={0} y={0} width={bWidth} height={canvasHeight} color={overlayColor} />
          {/* Inset highlight (top-left) */}
          <Path path={clipPath}>
            <Paint style="stroke" strokeWidth={Math.max(2, bWidth * 0.004)} color="rgba(255,255,255,0.25)" />
          </Path>
        </Group>
      </Canvas>

      {/* Stamps rendered on top of canvas */}
      <View style={braceletStyles.stampsOverlay}>
        {selectedStamps.slice(0, 30).map((stamp, i) => {
          const StampComponent = stampComponents[stamp.symbol];
          // Use sizeRatio for scaling
          const sizeRatio = 0.3; // Adjust for desired scale
          if (!StampComponent) return <View key={`${stamp.id}-${i}`} style={{ marginLeft: 1, marginRight: 1 }} />;
          return (
            <View key={`${stamp.id}-${i}`} style={{ marginLeft: 1, marginRight: 1 }}>
              <StampComponent
                sizeRatio={sizeRatio}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const braceletStyles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
    alignSelf: 'center',
  },
  centerMark: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: 4,
    marginLeft: -2,
    backgroundColor: colors.black15,
    borderRadius: 2,
    zIndex: 2,
  },
  stampsOverlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
})

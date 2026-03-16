import { Svg, Defs, Filter, FeDropShadow, G, Path } from 'react-native-svg';
import { SVGProps } from '../svg.type';
import { colors } from '../../../utils/colors';

export const LollipopI = ({
  width = 5.14,
  height = 46.51,
  color = colors.stamp,
  sizeRatio = 1,
}: SVGProps) => (
  <Svg
    width={width * sizeRatio}
    height={height * sizeRatio}
    viewBox="0 0 5.14 46.51"
  >
    <Defs>
      <Filter id="shadow">
        <FeDropShadow dx="1" dy="1" stdDeviation="1.5" floodColor={colors.white15} />
      </Filter>
    </Defs>
    <G fill={color} filter="url(#shadow)">
      <Path d="M296,209.82c0-10.3,0-20.57.62-30.86q.36-6,.74-12c.15-2.41-3.6-2.4-3.75,0-.65,10.6-1.35,21.17-1.38,31.79,0,3.7,0,7.4,0,11.1C292.22,212.24,296,212.24,296,209.82Z" transform="translate(-292.19 -165.13)"/>
    </G>
  </Svg>
);

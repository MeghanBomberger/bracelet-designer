import { Svg, Defs, Filter, FeDropShadow, G, Path } from 'react-native-svg';
import { SVGProps } from '../svg.type';
import { colors } from '../../../utils/colors';

export const LollipopL = ({
  width = 14.89,
  height = 48.96,
  color = colors.stamp,
  sizeRatio = 1,
}: SVGProps) => (
  <Svg
    width={width * sizeRatio}
    height={height * sizeRatio}
    viewBox="0 0 14.89 48.96"
  >
    <Defs>
      <Filter id="shadow">
        <FeDropShadow dx="1" dy="1" stdDeviation="1.5" floodColor={colors.white15} />
      </Filter>
    </Defs>
    <G fill={color} filter="url(#shadow)">
      <Path d="M88,105.31a1.9,1.9,0,0,0-1.87-1.88H78.24a1.49,1.49,0,0,0,.06-.51c0-10.31,0-20.57.62-30.86.24-4,.5-8,.75-12,.15-2.41-3.6-2.4-3.75,0-.66,10.6-1.36,21.17-1.39,31.79V103a2.72,2.72,0,0,0,.09.56,1.88,1.88,0,0,0-1.47,1.83A1.91,1.91,0,0,0,75,107.22H86.17A1.88,1.88,0,0,0,88,105.31Z" transform="translate(-73.15 -58.25)"/>
    </G>
  </Svg>
);

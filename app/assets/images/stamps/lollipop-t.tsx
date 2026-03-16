import { Svg, Defs, Filter, FeDropShadow, G, Path } from 'react-native-svg';
import { SVGProps } from '../svg.type';
import { colors } from '../../../utils/colors';

export const LollipopT = ({
  width = 23.01,
  height = 46.58,
  color = colors.stamp,
  sizeRatio = 1,
}: SVGProps) => (
  <Svg
    width={width * sizeRatio}
    height={height * sizeRatio}
    viewBox="0 0 23.01 46.58"
  >
    <Defs>
      <Filter id="shadow">
        <FeDropShadow dx="1" dy="1" stdDeviation="1.5" floodColor={colors.white15} />
      </Filter>
    </Defs>
    <G fill={color} filter="url(#shadow)">
      <Path d="M163.06,65.23H143.53a1.88,1.88,0,0,0,0,3.75H151c-.62,10-1.24,19.93-1.27,29.92V110c0,2.41,3.76,2.42,3.75,0,0-10.3,0-20.57.62-30.86.2-3.38.42-6.77.63-10.16H163a1.88,1.88,0,0,0,0-3.75Z" transform="translate(-141.79 -65.23)"/>
    </G>
  </Svg>
);

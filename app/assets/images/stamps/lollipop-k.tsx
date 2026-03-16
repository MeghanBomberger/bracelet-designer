import { Svg, Defs, Filter, FeDropShadow, G, Path } from 'react-native-svg';
import { SVGProps } from '../svg.type';
import { colors } from '../../../utils/colors';

export const LollipopK = ({
  width = 17.71,
  height = 46.52,
  color = colors.stamp,
  sizeRatio = 1,
}: SVGProps) => (
  <Svg
    width={width * sizeRatio}
    height={height * sizeRatio}
    viewBox="0 0 17.71 46.52"
  >
    <Defs>
      <Filter id="shadow">
        <FeDropShadow dx="1" dy="1" stdDeviation="1.5" floodColor={colors.white15} />
      </Filter>
    </Defs>
    <G fill={color} filter="url(#shadow)">
      <Path d="M285.66,231.85c0-7.34,0-14.66.23-22,2.88,2,4.41,5.92,5.44,9.12a42.69,42.69,0,0,1,2.13,12.87c0,2.41,3.76,2.42,3.75,0a45.85,45.85,0,0,0-2.47-14.5,25.09,25.09,0,0,0-4.73-8.81c6.73-3.78,9.55-12,9.58-19.58,0-2.41-3.73-2.42-3.75,0,0,6.77-2.55,14.8-9.58,17.17a.79.79,0,0,0-.22.05c.07-1.73.14-3.46.24-5.19q.36-6,.74-12c.15-2.41-3.6-2.4-3.75,0-.66,10.59-1.35,21.17-1.38,31.79,0,3.7,0,7.4,0,11.1C281.92,234.26,285.67,234.27,285.66,231.85Z" transform="translate(-281.89 -187.15)"/>
    </G>
  </Svg>
);

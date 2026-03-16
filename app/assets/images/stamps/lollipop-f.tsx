import { Svg, Defs, Filter, FeDropShadow, G, Path } from 'react-native-svg';
import { SVGProps } from '../svg.type';
import { colors } from '../../../utils/colors';

export const LollipopF = ({
  width = 19.14,
  height = 46.57,
  color = colors.stamp,
  sizeRatio = 1,
}: SVGProps) => (
  <Svg
    width={width * sizeRatio}
    height={height * sizeRatio}
    viewBox="0 0 19.14 46.57"
  >
    <Defs>
      <Filter id="shadow">
        <FeDropShadow dx="1" dy="1" stdDeviation="1.5" floodColor={colors.white15} />
      </Filter>
    </Defs>
    <G fill={color} filter="url(#shadow)">
      <Path d="M307.39,206.88h11.7a1.88,1.88,0,1,0,0-3.75h-11.6c.09-2.63.2-5.26.36-7.89q.3-5.07.63-10.14h12.24a1.88,1.88,0,0,0,0-3.75H308.34a1.84,1.84,0,0,0-.79.19,2,2,0,0,0-2.71,1.67c-.66,10.6-1.36,21.17-1.38,31.79,0,3.7,0,7.4,0,11.1,0,2.42,3.76,2.42,3.75,0C307.2,219.68,307.23,213.28,307.39,206.88Z" transform="translate(-303.46 -181.35)"/>
    </G>
  </Svg>
);

import { Svg, Defs, Filter, FeDropShadow, G, Path } from 'react-native-svg';
import { SVGProps } from '../svg.type';
import { colors } from '../../../utils/colors';

export const LollipopM = ({
  width = 18.71,
  height = 48.23,
  color = colors.stamp,
  sizeRatio = 1,
}: SVGProps) => (
  <Svg
    width={width * sizeRatio}
    height={height * sizeRatio}
    viewBox="0 0 18.71 48.23"
  >
    <Defs>
      <Filter id="shadow">
        <FeDropShadow dx="1" dy="1" stdDeviation="1.5" floodColor={colors.white15} />
      </Filter>
    </Defs>
    <G fill={color} filter="url(#shadow)">
      <Path d="M97,54.46a1.85,1.85,0,0,0-2.38.76q-3,6.91-6.06,13.78-1.89-7.45-4.08-14.84A1.61,1.61,0,0,0,83,52.68a1.86,1.86,0,0,0-2.2,1.45,1.71,1.71,0,0,0,0,.45c-.65,10.56-1.35,21.09-1.37,31.68v11.1c0,2.41,3.76,2.42,3.75,0,0-10.31,0-20.57.62-30.86a5.26,5.26,0,0,1,.05-.88c.85,3.19,1.66,6.38,2.43,9.6a1.61,1.61,0,0,0,1.41,1.31,1.82,1.82,0,0,0,2-.87q2.06-4.51,4.07-9.07C93.29,73.71,93,80.82,93,88V99.06c0,2.41,3.76,2.41,3.75,0,0-10.31,0-20.57.62-30.86q.36-6,.74-12A1.6,1.6,0,0,0,97,54.46Z" transform="translate(-79.37 -52.64)"/>
    </G>
  </Svg>
);

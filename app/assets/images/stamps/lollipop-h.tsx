import { Svg, Defs, Filter, FeDropShadow, G, Path } from 'react-native-svg';
import { SVGProps } from '../svg.type';
import { colors } from '../../../utils/colors';

export const LollipopH = ({
  width = 15.42,
  height = 46.51,
  color = colors.stamp,
  sizeRatio = 1,
}: SVGProps) => (
  <Svg
    width={width * sizeRatio}
    height={height * sizeRatio}
    viewBox="0 0 15.42 46.51"
  >
    <Defs>
      <Filter id="shadow">
        <FeDropShadow dx="1" dy="1" stdDeviation="1.5" floodColor={colors.white15} />
      </Filter>
    </Defs>
    <G fill={color} filter="url(#shadow)">
      <Path d="M332.45,214.15c0-6.54,0-13.05.17-19.57h6.49c-.09,2.82-.15,5.64-.15,8.47q0,5.55,0,11.1c0,2.41,3.76,2.42,3.75,0,0-6.75,0-13.48.18-20.21a1.74,1.74,0,0,0,.49-1.24,2,2,0,0,0-.43-1.14c.1-2.76.21-5.51.38-8.27.23-4,.49-8,.74-12,.15-2.41-3.6-2.41-3.75,0-.41,6.52-.83,13-1.1,19.57h-6.52c.09-2.51.21-5,.35-7.54.24-4,.5-8,.75-12,.15-2.41-3.61-2.41-3.75,0-.66,10.59-1.36,21.17-1.39,31.79,0,3.7,0,7.4,0,11.1C328.71,216.56,332.46,216.57,332.45,214.15Z" transform="translate(-328.68 -169.45)"/>
    </G>
  </Svg>
);

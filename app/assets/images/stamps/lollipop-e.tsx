import { Svg, Defs, Filter, FeDropShadow, G, Path } from 'react-native-svg';
import { SVGProps } from '../svg.type';
import { colors } from '../../../utils/colors';

export const LollipopE = ({
  width = 17.67,
  height = 46.35,
  color = colors.stamp,
  sizeRatio = 1,
}: SVGProps) => (
  <Svg
    width={width * sizeRatio}
    height={height * sizeRatio}
    viewBox="0 0 17.67 46.35"
  >
    <Defs>
      <Filter id="shadow">
        <FeDropShadow dx="1" dy="1" stdDeviation="1.5" floodColor={colors.white15} />
      </Filter>
    </Defs>
    <G fill={color} filter="url(#shadow)">
      <Path d="M314.83,246a1.9,1.9,0,0,0-1.87-1.87H301.51c0-5.72-.32-11.43-.48-17.14h10.39a1.88,1.88,0,1,0,0-3.75H301c0-2.09,0-4.17,0-6.26.1-3.91.3-7.81.53-11.71h9.91a1.88,1.88,0,1,0,0-3.75H299a1.9,1.9,0,0,0-1.87,1.88,2,2,0,0,0,.65,1.4,2.68,2.68,0,0,0-.05.3c-.35,6-.67,11.92-.59,17.88,0,.56,0,1.12,0,1.67a1.75,1.75,0,0,0-.05.46,2.33,2.33,0,0,0,.08.46c.1,3,.27,6,.37,9.07.11,3.49.15,7,.15,10.49a1.71,1.71,0,0,0,1.14,1.67,1.84,1.84,0,0,0,1.67,1.08H313A1.9,1.9,0,0,0,314.83,246Z" transform="translate(-297.17 -201.56)"/>
    </G>
  </Svg>
);

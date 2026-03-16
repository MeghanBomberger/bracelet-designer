import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './svg.type';
import { colors } from '@/utils/colors';

export const DownArrow = ({
  width = 64,
  height = 64,
  color = colors.white65,
  sizeRatio = 1,
}: SVGProps) => (
  <Svg
    width={width * sizeRatio}
    height={height * sizeRatio}
    viewBox="0 0 490 490"
  >
    <Path
      fill={color}
      d="M320.953,78.043L245,159.24l-75.953-81.197l-34.582,35.377L91.341,67.315L0,160.754l245,261.932l245-261.932l-91.341-93.439l-43.124,46.105L320.953,78.043z M168.568,122.455L245,204.162l76.432-81.707l13.11,13.41L245,231.597l-89.542-95.732L168.568,122.455z M399.138,111.727l48.398,49.506L245,377.764L42.464,161.233l48.398-49.506l32.458,34.701L245,276.533l121.681-130.106L399.138,111.727z"
    />
  </Svg>
);

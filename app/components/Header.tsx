import {
  View,
  StyleSheet,
  useWindowDimensions,
} from 'react-native'

import { globalStyles } from '@/utils/global.styles'
import { colors } from '@/utils/colors'
import { Logo, logoRatioWtoH } from '@/assets/images/logo'

export const Header = () => {
  const { height, width } = useWindowDimensions()

  return (
    <View style={[styles.header, globalStyles.centerH]}>
      <View style={styles.logoPosition}>
        <Logo
          height={
            height > width
              ? height * 0.02
              : height * 0.0275
          }
          width={
            height > width
              ? height * 0.02 * logoRatioWtoH
              : height * 0.0275 * logoRatioWtoH
          }
          color={colors.white65}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'fixed',
    top: 0,
    left: '1%',
    right: '1.25%',
    justifyContent: 'space-between',
    height: '5%',
  },
  logoPosition: {
    position: 'absolute',
    left: 6,
    top: 6,
  },
})

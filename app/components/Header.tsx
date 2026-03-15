import { 
  View,
  StyleSheet,
} from 'react-native'

import { Logo } from '@/assets/images/logo'
import { globalStyles } from '@/utils/global.styles'

export const Header = () => {
  return (
    <View style={[styles.header, globalStyles.centerH]}>
      <View style={styles.logoPosition}>
        <Logo sizeRatio={0.075}/>
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

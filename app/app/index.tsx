import { 
  ImageBackground, 
  StyleSheet,
  View,
} from 'react-native'

import { colors } from '@/utils/colors'
import { globalStyles } from '@/utils/global.styles'

export default function Home() {
  return (
    <ImageBackground
      source={require('@/assets/images/background.jpg')}
      resizeMode="cover"
      style={styles.background}
    >
      <View 
        style={[
          styles.contents,
          globalStyles.centerV,
        ]}
      >

      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contents: {
    position: 'absolute',
    top: '5%',
    right: '2%',
    left: '2%',
    bottom: '5%',
    backgroundColor: colors.white15,
    borderRadius: '2rem',
    paddingVertical: '3%',
  },
})

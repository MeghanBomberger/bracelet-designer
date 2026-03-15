import { 
  ImageBackground, 
  StyleSheet,
  View,
} from 'react-native'

import { colors } from '@/utils/colors'
import { globalStyles } from '@/utils/global.styles'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <ImageBackground
      source={require('@/assets/images/background.jpg')}
      resizeMode="cover"
      style={styles.background}
    >
      <Header/>
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
    top: 25,
    right: 10,
    left: 10,
    bottom: 10,
    backgroundColor: colors.white2,
    borderRadius: 16,
  },
})

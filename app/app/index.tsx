import { 
  ImageBackground, 
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native'
import { useEffect, useState } from 'react'

import { colors } from '@/utils/colors'
import { globalStyles } from '@/utils/global.styles'
import { Header } from '@/components/Header'
import { ErrorMessage } from '@/components/ErrorMessage'
import { RotateMessage } from '@/components/RotateMessage'

export default function Home() {
  const { height, width } = useWindowDimensions()
  const [ errorMessage, setErrorMessage ] = useState<string>('')
  const [ rotateMessage, setRotateMessage ] = useState<boolean>(true)

  useEffect(() => {
    setRotateMessage(height > width)
  }, [height, width])

  console.log('height', height)
  console.log('width', width)
  console.log('rotateMessage', rotateMessage)

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
        {!!errorMessage && (
          <ErrorMessage 
            message={errorMessage}
            onClose={() => setErrorMessage('')} 
          />
        )}
        {!!rotateMessage && (
          <RotateMessage/>
        )}
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

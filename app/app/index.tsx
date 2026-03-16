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
import { Bracelet } from '@/components/Bracelet'
import { Bracelet as BraceletType } from '@/utils/types/bracelet.types'
import { Stamp } from '@/utils/types/stamp.types'

export default function Home() {
  const { height, width } = useWindowDimensions()
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [rotateMessage, setRotateMessage] = useState<boolean>(true)
  const [selectedBlank, setSelectedBlank] = useState<BraceletType | null>(null)
  const [selectedStamps, setSelectedStamps] = useState<Stamp[]>([
    { id: 25, symbol: 'lollipop-a.svg', text: 'a', type: 'uppercase,alphanumeric', size_mm: 4.0 },
    { id: 26, symbol: 'lollipop-b.svg', text: 'b', type: 'uppercase,alphanumeric', size_mm: 4.0 },
    { id: 27, symbol: 'lollipop-c.svg', text: 'c', type: 'uppercase,alphanumeric', size_mm: 4.0 },
  ])

  useEffect(() => {
    setRotateMessage(height > width)
  }, [height, width])

  return (
    <ImageBackground
      source={require('@/assets/images/background.jpg')}
      resizeMode="cover"
      style={styles.background}
    >
      <Header />
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
          <RotateMessage />
        )}
        {!rotateMessage && (
          <>
            {/* <PickBlank/> */}

            <Bracelet
              bracelet={selectedBlank}
              selectedStamps={selectedStamps}
            />

            {/* {selectedBlank.shape && (
              <Stamps/>
            )} */}
          </>
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

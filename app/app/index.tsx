import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
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
import { PickBlank } from '@/components/PickBlank'
import { Stamps } from '@/components/Stamps'
import { blanks } from '@/data/Blanks'

export default function Home() {
  const { height, width } = useWindowDimensions()
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [rotateMessage, setRotateMessage] = useState<boolean>(true)
  const [selectedBlank, setSelectedBlank] = useState<BraceletType | null>(blanks.find(b => b.available) ?? null)
  const [selectedStamps, setSelectedStamps] = useState<Stamp[]>([])

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
      <ScrollView
        style={styles.contentsScroll}
        contentContainerStyle={[styles.contents, globalStyles.centerV]}
      >
        {/* {!!errorMessage && (
          <ErrorMessage
            message={errorMessage}
            onClose={() => setErrorMessage('')}
          /> //TODO placement fix needed to avoid overlapping on mobible
        )} */} 
        {!!rotateMessage && (
          <RotateMessage />
        )}
        {!rotateMessage && (
          <>
            <PickBlank
              setSelectedBlank={setSelectedBlank}
              largestStamp={selectedStamps.reduce((largest, stamp) => stamp.size_mm > largest.size_mm ? stamp : largest, selectedStamps[0])}
            />

            <Bracelet
              bracelet={selectedBlank}
              selectedStamps={selectedStamps}
            />

            {selectedBlank?.shape && (
              <Stamps
                blankSize={selectedBlank.width}
                selectedStamps={selectedStamps}
                setSelectedStamps={setSelectedStamps}
                setErrorMessage={setErrorMessage}
              />
            )}
          </>
        )}
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentsScroll: {
    position: 'absolute',
    top: 25,
    right: 10,
    left: 10,
    bottom: 10,
    backgroundColor: colors.white2,
    borderRadius: 16,
  },
  contents: {
    flexGrow: 1,
    padding: 10,
  },
})

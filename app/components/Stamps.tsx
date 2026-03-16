import { useEffect, useRef, useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { stamps } from '@/data/Stamps';
import { stampComponents } from '@/assets/images/stamps';
import { Stamp } from '@/utils/types/stamp.types';
import { colors } from '@/utils/colors';
import { globalStyles } from '@/utils/global.styles';
import { DownArrow } from '@/assets/images/down-arrow-2';
import { RoundedSquare } from '@/assets/images/rounded-black-square-shape';

const SPACE_STAMP: Stamp = {
  id: -1,
  symbol: 'space',
  text: ' ',
  type: 'symbol',
  size_mm: 2.0,
};

const MAX_STAMPS = 40;

interface StampsProps {
  blankSize: number; // blank width in inches
  selectedStamps: Stamp[];
  setSelectedStamps: (stamps: Stamp[]) => void;
  setErrorMessage: (message: string) => void;
}

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <View style={{ transform: [{ rotate: direction === 'left' ? '90deg' : '270deg' }] }}>
    <DownArrow width={64} height={64} color={colors.white65} />
  </View>
);

export const Stamps = ({
  blankSize,
  selectedStamps,
  setSelectedStamps,
  setErrorMessage,
}: StampsProps) => {
  const stampSetNames = Object.keys(stamps);
  const defaultSet = Math.max(0, stampSetNames.indexOf('lollipop'));
  const [currentSet, setCurrentSet] = useState(defaultSet);

  const fitsBlank = (size_mm: number) => blankSize > size_mm * 0.0393701 + 0.015;

  const nextStampSet = () => setCurrentSet(c => (c + 1) % stampSetNames.length);
  const prevStampSet = () => setCurrentSet(c => (c === 0 ? stampSetNames.length - 1 : c - 1));

  const selectStamp = (stamp: Stamp) => {
    if (!fitsBlank(stamp.size_mm)) return;
    if (selectedStamps.length >= MAX_STAMPS) {
      setErrorMessage('Sorry, only 40 characters can fit on this bracelet');
      return;
    }
    setSelectedStamps([...selectedStamps, stamp]);
  };

  const removeStamp = () => {
    if (selectedStamps.length === 0) return;
    if (selectedStamps.length === MAX_STAMPS) setErrorMessage('');
    setSelectedStamps(selectedStamps.slice(0, -1));
  };

  const clearStamps = () => {
    if (selectedStamps.length === 0) return;
    if (selectedStamps.length === MAX_STAMPS) setErrorMessage('');
    setSelectedStamps([]);
  };

  const addSpace = () => {
    if (selectedStamps.length >= MAX_STAMPS) {
      setErrorMessage('Sorry, only 40 characters can fit on this bracelet');
      return;
    }
    setSelectedStamps([...selectedStamps, SPACE_STAMP]);
  };

  const keyHandlerRef = useRef<((e: KeyboardEvent) => void) | undefined>(undefined);
  keyHandlerRef.current = (e: KeyboardEvent) => {
    switch (e.key) {
      case ' ': addSpace(); break;
      case 'Backspace': removeStamp(); break;
      case 'ArrowLeft': prevStampSet(); break;
      case 'ArrowRight': nextStampSet(); break;
      default: {
        const setStamps = Object.values(stamps[stampSetNames[currentSet]]);
        const match = setStamps.find(s => s.text === e.key);
        if (match) selectStamp(match);
      }
    }
  };

  useEffect(() => {
    if (Platform.OS !== 'web') return;
    const handleKeyDown = (e: KeyboardEvent) => keyHandlerRef.current?.(e);
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentStamps = Object.values(stamps[stampSetNames[currentSet]]);
  const isSymbolSet = stampSetNames[currentSet] === 'symbol';

  const stampControls = [
    { label: 'Clear', action: clearStamps },
    { label: 'Backspace', action: removeStamp },
    { label: 'Space', action: addSpace },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.keyboard}>
        <Pressable onPress={prevStampSet} style={styles.arrowButton}>
          <ArrowIcon direction="left" />
        </Pressable>

        <ScrollView
          style={styles.stampScroll}
          contentContainerStyle={styles.stampSet}
        >
          {currentStamps.map(stamp => {
            const StampComponent = stampComponents[stamp.symbol];
            const fits = fitsBlank(stamp.size_mm);
            const sizePx = stamp.size_mm * 12;
            return (
              <Pressable
                key={stamp.id}
                onPress={() => selectStamp(stamp)}
                style={[
                  styles.stampButton,
                  {
                    width: isSymbolSet ? undefined : sizePx,
                    height: sizePx,
                    backgroundColor: fits ? colors.white5 : colors.white15,
                  },
                  fits && styles.stampButtonFits,
                ]}
              >
                {StampComponent && (
                  <StampComponent
                    width={sizePx * 0.8}
                    height={sizePx * 0.8}
                    color={fits ? colors.white : 'rgba(255,255,255,0.3)'}
                  />
                )}
              </Pressable>
            );
          })}
        </ScrollView>

        <Pressable onPress={nextStampSet} style={styles.arrowButton}>
          <ArrowIcon direction="right" />
        </Pressable>
      </View>

      <View style={styles.controls}>
        {stampControls.map(control => (
          <Pressable
            key={control.label}
            onPress={control.action}
            style={[styles.controlButton, control.label === 'Space' && styles.spaceButton]}
          >
            <Text style={styles.controlLabel}>{control.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingTop: 24,
    borderTopWidth: 3,
    borderTopColor: colors.white65,
    width: '100%',
  },
  keyboard: {
    ...globalStyles.centerH,
    alignItems: 'center',
  },
  arrowButton: {
    width: 144,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stampScroll: {
    flex: 1,
  },
  stampSet: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 1040,
    marginHorizontal: '5%',
  },
  stampButton: {
    ...globalStyles.centerH,
    margin: 4,
    borderRadius: 4,
    overflow: 'hidden',
  },
  stampButtonFits: {
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 4,
  },
  controls: {
    ...globalStyles.centerH,
    marginTop: 24,
    paddingVertical: 24,
    borderTopWidth: 3,
    borderTopColor: colors.white4,
    borderBottomWidth: 3,
    borderBottomColor: colors.white65,
  },
  controlButton: {
    ...globalStyles.centerH,
    borderWidth: 1,
    borderColor: colors.white65,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 48,
    marginHorizontal: 8,
    maxWidth: 240,
    backgroundColor: colors.white15,
  },
  spaceButton: {
    width: '40%',
    maxWidth: 480,
  },
  controlLabel: {
    fontFamily: 'Montserrat_400Regular',
    color: colors.white,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 13,
    letterSpacing: 1,
  },
});

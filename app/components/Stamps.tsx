import { useEffect, useRef, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { stamps } from '@/data/Stamps';
import { stampComponents } from '@/assets/images/stamps';
import { Stamp } from '@/utils/types/stamp.types';
import { colors } from '@/utils/colors';
import { globalStyles } from '@/utils/global.styles';
import { DownArrow } from '@/assets/images/down-arrow-2';

const SPACE_STAMP: Stamp = {
  id: -1,
  symbol: 'space',
  text: ' ',
  type: 'symbol',
  size_mm: 2.0,
};

const MAX_STAMPS = 30;

interface StampsProps {
  blankSize: number; // blank width in inches
  selectedStamps: Stamp[];
  setSelectedStamps: (stamps: Stamp[]) => void;
  setErrorMessage: (message: string) => void;
}

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <View style={{ transform: [{ rotate: direction === 'left' ? '90deg' : '270deg' }] }}>
    <DownArrow width={40} height={40} color={colors.white65} />
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
  const { width } = useWindowDimensions();
  const baseUnit = Math.min(width / 120, 9);

  const fitsBlank = (size_mm: number) => blankSize > size_mm * 0.0393701 + 0.015;

  const nextStampSet = () => setCurrentSet(c => (c + 1) % stampSetNames.length);
  const prevStampSet = () => setCurrentSet(c => (c === 0 ? stampSetNames.length - 1 : c - 1));

  const selectStamp = (stamp: Stamp) => {
    if (!fitsBlank(stamp.size_mm)) return;
    if (selectedStamps.length >= MAX_STAMPS) {
      setErrorMessage('Sorry, only 30 characters can fit on this bracelet');
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
      setErrorMessage('Sorry, only 30 characters can fit on this bracelet');
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

        <View style={styles.stampSet}>
          {currentStamps.map(stamp => {
            const StampComponent = stampComponents[stamp.symbol];
            const fits = fitsBlank(stamp.size_mm);
            const sizePx = stamp.size_mm * baseUnit;
            return (
              <Pressable
                key={stamp.id}
                onPress={() => selectStamp(stamp)}
                style={[
                  styles.stampButton,
                  {
                    width: isSymbolSet ? undefined : sizePx,
                    height: sizePx,
                    opacity: fits ? 1 : 0.3,
                  },
                  fits && styles.stampButtonFits,
                ]}
              >
                {StampComponent && (
                  <StampComponent
                    width={sizePx * 0.8}
                    height={sizePx * 0.8}
                    color={colors.white}
                  />
                )}
              </Pressable>
            );
          })}
        </View>

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
    borderTopWidth: 2,
    borderTopColor: colors.white65,
    width: '100%',
  },
  keyboard: {
    ...globalStyles.centerH,
    alignItems: 'center',
  },
  arrowButton: {
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stampSet: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 1040,
    marginHorizontal: '2%',
  },
  stampButton: {
    ...globalStyles.keyboardButton,
    ...globalStyles.centerH,
    overflow: 'hidden',
  },
  stampButtonFits: {
    shadowColor: colors.black25,
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 4,
  },
  controls: {
    ...globalStyles.centerH,
    marginTop: 24,
    paddingVertical: 24,
    borderTopWidth: 2,
    borderTopColor: colors.white4,
    borderBottomWidth: 2,
    borderBottomColor: colors.white65,
  },
  controlButton: {
    ...globalStyles.keyboardButton,
    ...globalStyles.centerH,
    paddingVertical: 8,
    paddingHorizontal: 48,
    maxWidth: 480,
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

import { useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { blanks } from '@/data/Blanks';
import { Bracelet } from '@/utils/types/bracelet.types';
import { Stamp } from '@/utils/types/stamp.types';

interface PickBlankProps {
  setSelectedBlank?: (blank: Bracelet | null) => void;
  largestStamp?: Stamp | null;
}

export const PickBlank = ({
  setSelectedBlank,
  largestStamp,
}: PickBlankProps) => {
  const { width } = useWindowDimensions()
  const pickBraceletStyles = styles(width)
  const firstAvailable = blanks.find(b => b.available) ?? null
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<number | null>(firstAvailable?.id ?? null)
  const blanksOptions = blanks
    .filter(blank => blank.available && (largestStamp ? blank.width * 25.4 >= largestStamp.size_mm : true))
    .map(blank => ({
      value: blank.id,
      label: `${blank.shape.charAt(0).toUpperCase()}${blank.shape.slice(1)} - ${blank.width}" x ${blank.length}" - ${blank.metal}`,
    }))

  return (
    <View style={pickBraceletStyles.pickBlankContainer}>
      {blanksOptions.length > 0 && (
        <DropDownPicker
          open={open}
          value={value}
          items={blanksOptions}
          setOpen={setOpen}
          setValue={setValue}
          onSelectItem={(item) => {
            const blank = blanks.find(b => b.id === item.value)
            setSelectedBlank?.(blank ?? null)
          }}
        />
      )}
    </View>
  )
}

const styles = (width: number) => StyleSheet.create({
  pickBlankContainer: {
    maxWidth: width * 0.4,
    width: '60%',
    zIndex: 3,
    marginBottom: '3%',
  }
})

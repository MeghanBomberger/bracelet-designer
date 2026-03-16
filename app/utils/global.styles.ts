import { StyleSheet } from 'react-native'
import { colors } from './colors'

export const globalStyles = StyleSheet.create({
  centerV: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerH: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    backgroundColor: colors.red,
    color: colors.white,
    paddingVertical: 1,
    paddingHorizontal: 3,
  },
  primaryFont: {
    fontFamily: 'Rowdies_400Regular',
  },
  secondaryFont: {
    fontFamily: 'Montserrat_400Regular',
  },
  accentFont: {
    fontFamily: 'Datatype_400Regular',
  },
  keyboardButton: {
    padding: 5,
    backgroundColor: colors.white5,
    borderRadius: 10,
    margin: 5,
    cursor: 'pointer',
  },
  keyboardButtonHover: {
    borderColor: colors.white15,
    borderWidth: 3,
  },
})

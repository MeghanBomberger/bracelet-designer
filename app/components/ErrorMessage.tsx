import { Text, StyleSheet, TouchableOpacity, } from 'react-native'

import { globalStyles } from '@/utils/global.styles'

interface ErrorMessageProps {
  message: string;
  onClose?: () => void;
}

export const ErrorMessage = ({ message, onClose = () => {} }: ErrorMessageProps) => {
  return (
    <TouchableOpacity 
      onPress={onClose}
      style={styles.errorMessagePosition}
    >
      <Text 
        style={[
          globalStyles.errorMessage, 
          globalStyles.accentFont,
          globalStyles.centerV,
        ]}
      >
        {message}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  errorMessagePosition: {
    position: 'absolute',
    top: 5,
    right: 10,
    left: 10,
    paddingTop: 4,
    paddingBottom: 6,
    borderRadius: 18,
  }
})

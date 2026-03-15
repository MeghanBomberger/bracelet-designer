import { ResponsiveIcon } from "@/assets/images/Responsive";
import { colors } from "@/utils/colors";
import { globalStyles, height } from "@/utils/global.styles";
import { View, Text, StyleSheet } from "react-native";


export const RotateMessage = () => (
  <View 
    style={[
      styles.rotateMessagePosition,
      globalStyles.centerV,
    ]}
  >
    <Text
      style={[
        globalStyles.primaryFont,
        styles.text,
      ]}
    >
      Rotate 90°
    </Text>
    <ResponsiveIcon
      width={height * 0.2}
      height={height * 0.2}
      color={colors.black5}
    />
  </View>
)

const styles = StyleSheet.create({
  rotateMessagePosition: {
    padding: 20,
  },
  text: {
    fontSize: 48,
    color: colors.black5,
  },
})

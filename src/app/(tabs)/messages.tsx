import { theme } from '@/theme'
import { Text, View, StyleSheet } from 'react-native'

export default function Messages() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Messeges</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.regular,
  },
})

import { Pressable, PressableProps, Text } from 'react-native'
import { FilterProps } from './filter'

import { styles } from './styles'

export function Filter({
  filter,
  selected,
  ...rest
}: FilterProps & PressableProps) {
  return (
    <Pressable style={[styles.pressable, styles.pressableSelected]} {...rest}>
      <Text style={styles.text}>{filter}</Text>
    </Pressable>
  )
}

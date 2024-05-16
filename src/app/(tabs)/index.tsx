import { View, StyleSheet } from 'react-native'
import { useState } from 'react'

import { theme } from '@/theme'
import { Filters } from '@/components/Filters'
import { FILTERS } from '@/utils/filters'

export default function Home() {
  const [filter, setFilter] = useState('Tudo')
  return (
    <View style={styles.container}>
      <Filters filters={FILTERS} filter={filter} onChange={setFilter} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    padding: 12,
    paddingTop: 52,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.regular,
  },
})

import { FlatList } from 'react-native'

import { Filter } from '@/components/Filter'
import { styles } from './styles'
import { FiltersProps } from './filters'

export function Filters({ filters, filter, onChange }: FiltersProps) {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
      horizontal
      style={styles.list}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    ></FlatList>
  )
}

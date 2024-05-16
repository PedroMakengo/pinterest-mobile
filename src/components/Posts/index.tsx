import { View } from 'react-native'

import { styles } from './styles'
import { ScrollView } from 'react-native-gesture-handler'
import { PostsProps } from './posts'
import { Post } from '@/components/Post'

export function Posts({ posts }: PostsProps) {
  function postsByColumn(column: 'right' | 'left') {
    const rest = column == 'left' ? 0 : 1

    return posts
      .filter((_, index) => index % 2 === rest)
      .map((post) => <Post post={post} key={post.id} />)
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
    >
      <View style={styles.container}>
        <View style={styles.column}>{postsByColumn('left')}</View>
        <View style={styles.column}>{postsByColumn('right')}</View>
      </View>
    </ScrollView>
  )
}

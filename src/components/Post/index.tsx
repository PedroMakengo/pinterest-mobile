import { useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { PostProps } from './post'
import { Feather } from '@expo/vector-icons'

import { styles } from './styles'

type Props = {
  post: PostProps
}

export function Post({ post }: Props) {
  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    if (post.image) {
      Image.getSize(post.image, (width, height) => {
        setAspectRatio(width / height)
      })
    }
  }, [])

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: post.image }}
        style={[styles.image, { aspectRatio }]}
      />

      <View style={styles.footer}>
        <Text style={styles.title}>{post.title}</Text>
        <Feather />
      </View>
    </View>
  )
}

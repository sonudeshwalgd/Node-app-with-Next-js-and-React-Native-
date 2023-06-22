import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ViewPost from '../container/AddViewPost/ViewPost'
import AddPost from '../container/AddViewPost/AddPost'

export default function AddViewPost() {
  return (
    <ScrollView>
      <AddPost/>
      <ViewPost/>
    </ScrollView>
  )
}
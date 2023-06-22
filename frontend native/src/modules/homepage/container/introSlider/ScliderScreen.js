import { View, Text } from 'react-native'
import React from 'react'

export default function ScliderScreen(props) {
  const {title,backgroundColor} =props
    return (
    <View style={{height:"100%",backgroundColor:backgroundColor }}>
      <Text>{title}</Text>
    </View>
  )
}
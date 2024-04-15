import React from 'react'
import { View, Text } from 'react-native'

export default function SectionHeading({heading}) {
    return (
        <View>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 22,
                marginBottom: 5,
                color: '#56e6d3',
                paddingLeft: 5, marginTop:15
            }}>{heading}</Text>
        </View>
    )
}

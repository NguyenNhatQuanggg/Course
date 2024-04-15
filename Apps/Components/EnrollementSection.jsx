import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Utils/Colors'

export default function EnrollementSection() {
    const [isEnrolled, setEnrolled]=useState(true);
  return (
    <TouchableOpacity style={{
        padding:10,
        backgroundColor:Colors.PRIMARY,
        borderRadius:20,
        alignItems:'center',
    }}>
          {isEnrolled?
            <Text style={{ fontFamily: 'outfit-bold' }}>Continue</Text>
          :<Text style={{ fontFamily: 'outfit-bold' }}>EnrollementSection</Text>}
    </TouchableOpacity>
  )
}
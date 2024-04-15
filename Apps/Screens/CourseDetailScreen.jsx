import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import CourseIntro from '../Components/CourseIntro';
import EnrollementSection from '../Components/EnrollementSection';
export default function CourseDetailScreen() {
  const {pamars}=useRoute();
  const [course, setCourse]=useState();
  const navigation=useNavigation();
  useEffect(()=>{
    setCourse(pamars);
  },[pamars])
  return (
    <View style={{padding:20, paddingTop:25,}}>
      <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:5}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionicons name="arrow-back-circle-sharp" size={30} color="black" />
      </TouchableOpacity>
        <Text style={{fontSize:18, fontFamily:"outfit-medium"}}>Coures Detail</Text>
      </View>

        {/* Course Intro */}
        <CourseIntro course={course}/>
        <EnrollementSection />

    </View>
  )
}
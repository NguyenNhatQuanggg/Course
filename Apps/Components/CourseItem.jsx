import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Colors from '../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CourseItem({course}) {
    const navigation=useNavigation();
    return (
        <TouchableOpacity
        onPress={()=>navigation.navigate('course-detail',{
            course:course
        })}
         style={{backgroundColor:Colors.WHITE, width:260, marginRight:15, 
        padding:10, borderRadius:10}}>
            <Image source={{uri:course.banner.url}}
                style={{width:238, borderRadius:15, height:150, alignItems:'center'}}
            />
            <View>
                <Text style={{textAlign:'center', marginTop:10, fontSize:16, fontFamily:'outfit-bold'}}>{course.name}</Text>
                <View>
                    <Ionicons name="book" size={24} color="black" />
                    <Text></Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

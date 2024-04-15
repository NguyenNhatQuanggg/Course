import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';
import SectionHeading from './SectionHeading'
export default function CourseIntro({course}) {
    return (
    <View>
          <Video
              style={styles.video}
              source={{
                  uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
              }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
          />

          <View>
                <Text style={{ padding: 10, fontFamily: 'outfit-bold' }}>React Native project for beginners | React Native Tutorial | Expo , HyGraph</Text>
          </View>
       
              <SectionHeading heading={'Description'}/>
    </View>
  )
}

const styles = StyleSheet.create({
    video:{
        width:'100%',
        height:250
    }
    
})
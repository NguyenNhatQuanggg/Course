import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import { client } from '../Utils/KindConfig'
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {

    const [userDetail, setUserDetail]=useState();

useEffect(()=>{
getUserDetails();
},[])

const getUserDetails=async()=>{
    const user=await client.getUserDetails();
    setUserDetail(user);
}

    return (
        <>
        <View style={{display:'flex', flexDirection:'row', gap:5, alignItems:'center'}}>
            <Image source={{uri:userDetail?.picture}}
                style={{width:45, height:45, borderRadius:99}}
            />
            <View>
                <Text style={{fontSize: 18, fontFamily:'outfit'}}>Wellcome,</Text>
                <Text style={{fontSize:22, fontFamily:'outfit-bold', color:Colors.PRIMARY}}>Hello {userDetail?.given_name}</Text>
            </View>
        </View>

        <View style={styles.input}>
                <Ionicons name="search" size={24} color={Colors.PRIMARY} />
            <TextInput placeholder='Search' style={{fontFamily:'outfit'}}>

            </TextInput>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:Colors.WHITE,
        padding:12,
        borderRadius:99,
        paddingHorizontal:20,
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignContent:'center', 
        borderWidth:1,
        borderColor:Colors.PRIMARY
    }
});

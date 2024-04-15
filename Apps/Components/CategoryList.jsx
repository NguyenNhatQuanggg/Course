import React, { useState } from 'react'
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import SectionHeading from './SectionHeading';

export default function CategoryList({ categories }) {

const [activeIndex, setActiveIndex]=useState();

    return (
        <View style={{marginTop: 13}}>
            <SectionHeading heading={'Category'}/>
           <FlatList 
                data={categories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index})=>(
                    <TouchableOpacity style={[styles.container, activeIndex == index && { borderWidth: 1, borderColor:'#56e6d3' }]}
                    onPress={() => {setActiveIndex(index)}}
                    >
                        <Image 
                        source={{uri:item?.icon?.url}}
                        style={{width:40,height:40, borderRadius:50,
                        objectFit:'contain'}}/>
                        <Text style={{textAlign:'center', marginTop:5}}>{item?.name}</Text>
                    </TouchableOpacity>

                )}
           />
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffff' ,
        padding:10,
        fontSize:20,
        marginRight:10,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        width: 80,
    }
})

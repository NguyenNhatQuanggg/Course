import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Danh sách các khóa học
const data = [
    { id: '1', title: 'Course 1', image: require('../../assets/images/hygrap.png') },
    { id: '2', title: 'Course 2', image: require('../../assets/images/Java.png') },
    { id: '3', title: 'Course 3', image: require('../../assets/images/js.png') },
    { id: '4', title: 'Course 4', image: require('../../assets/images/php.jpg') },
    { id: '5', title: 'Course 5', image: require('../../assets/images/python.png') },
];

export default function MyCourseScreens({ navigation }) {
    // Hàm render một mục trong danh sách
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        //hien thi che do xem vung chua bao gom tieu de va thanh phan Flatlist
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back-circle-sharp" size={30} color="black" style={{paddingLeft:15}}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>My Course</Text>
                <View style={styles.placeholder} />
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1ebeb',
        padding: 7,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 18,
        fontFamily: 'outfit-medium',
        marginLeft: 5,
    },
    item: {
        margin: 10,
        backgroundColor: '#c4e6e2',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 125,
        borderRadius: 10,
        marginRight: 10,
    },
    title: {
        fontFamily: 'outfit-bold',
        fontSize: 18,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    backButton: {
        marginRight: 15,
        paddingTop:20
    },
    headerText: {
        fontSize: 18,
        fontFamily: 'outfit-bold',
        flex: 1,
        textAlign: 'center',
        fontSize:20,
        marginTop:20
    },
    placeholder: {
        width: 30, // Adjust the width as needed
    },
});
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { client } from '../Utils/KindConfig'
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreens({ navigation }) {
    const [userDetail, setUserDetail] = useState(null);

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = async () => {
        try {
            const user = await client.getUserDetails();
            setUserDetail(user);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    const handleHomePress = () => {
        navigation.navigate('Home');
    };

    const handleMyCoursePress = () => {
       
    };


   const handleLogoutPress = () => {
//   // Lấy đối tượng navigation từ hook useNavigation
//   const navigation = useNavigation();

//   // Thực hiện logic logout ở đây (ví dụ: xóa token, đăng xuất khỏi tài khoản, vv.)

//   // Chuyển tới màn hình LoginScreens
//   navigation.navigate('Logout');
};

    return (
        <View style={styles.container}>
            <Image source={{ uri: userDetail?.picture }} style={styles.profileImage} />
            <Text style={styles.title}>Nguyen Nhat Quang</Text>
            <View style={styles.profileSection}>
                <Text style={styles.label}>SDT: 0349464251</Text>
                <Text style={styles.value}>{userDetail?.name}</Text>
            </View>
            <View style={styles.profileSection}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{userDetail?.email}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Home" onPress={handleHomePress} />
                <Button title="My Course" onPress={handleMyCoursePress} />
                <Button title="Logout" onPress={handleLogoutPress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    profileSection: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10,
        paddingLeft:120,
        alignItems:'center'
    },
    value: {
        flex: 1,
    },
    buttonContainer: {
        marginTop: 20,
    },
});

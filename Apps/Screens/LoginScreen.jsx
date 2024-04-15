import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../Utils/Colors';
import { client } from '../Utils/KindConfig';
import { AuthContext } from '../../App';

export default function LoginScreen() {
    const { setAuth } = useContext(AuthContext);

    const handleSignUp = async () => {
        const token = await client.register();
        if (token) {
            console.log('Authenticated Successfully!');
            setAuth(true);
            // User was authenticated
        }
    };

    const handleSignIn = async () => {
        const token = await client.login();
        if (token) {
            
            setAuth(true);
            // User was authenticated
        }
    };

    return (
        <View>
            <Image
                source={require('../../assets/images/rocket.png')}
                style={{ width: '100%', height: 350 }}
            />

            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 45, fontWeight: 'bold' }}>
                    Welcome To{' '}
                    <Text style={{ color: Colors.PRIMARY }}>Nhat Quang</Text>
                </Text>
                <Text style={{ fontSize: 20, paddingTop: 10, marginTop: 7, color: Colors.GRAY }}>
                    Learn Programming to Build Real Life Projects
                </Text>

                {/* Sign in button */}
                <TouchableOpacity onPress={handleSignIn} style={styles.button}>
                    <Text style={{ textAlign: 'center', color: Colors.WHITE, fontSize: 20 }}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSignUp}>
                    <Text style={{ marginTop: 10, textAlign: 'center', color: Colors.PRIMARY, fontSize: 18 }}>
                        Create New Account?
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 20,
        marginTop: 100,
    },
});
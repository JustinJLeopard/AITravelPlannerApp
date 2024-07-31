import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from './../constants/Colors.ts'
import { useRouter } from 'expo-router'
import { TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Login() {

    const router= useRouter();
return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Image source={require('./../assets/images/login.webp')}
            style={{
                    width: 450,
                    height: 570,
            }}
        />
        <View style={styles.container}>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                fontFamily: 'inconsolata',
                textAlign: 'center',
                padding: 10,
                paddingBottom: -50,
                marginBottom: -99,
            }}>AI-Powered Travel Planner</Text>

            <Text style={{
                fontSize: 20,
                textAlign: 'center',
                color: Colors.gray,
                marginTop: 99,
            }}>Plan your trips effortlessly with our AI-powered travel planner. Our intelligent assistant helps you find the best destinations, create personalized itineraries, and book accommodations, all tailored to your preferences and budget</Text>

            <TouchableOpacity style={styles.button}
                onPress={() => router.push('auth/sign-in')}
            >
                <Text style={{color:Colors.white,
                    fontSize: 20,
                }}>Get Started</Text>
            </TouchableOpacity>
        </View>
    </GestureHandlerRootView>
)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: -15,
        height: '100%',
        paddingLeft: 28,
        paddingRight: 28,
        paddingTop: 15,
    },
    button:{
        backgroundColor: Colors.black,
        padding: 10,
        borderRadius: 99,
        marginTop: 25,
        width: '100%',
        alignItems: 'center',

    }
})


import { View, Text, TextInput, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from './../../../constants/Colors.ts'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../../configs/FirebaseConfig';

export default function SignIn() {
    const navigation= useNavigation();
    const router= useRouter();


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
            title: 'Sign In'
        })
    }, [])

    const OnSignIn = () => {

        if (!email || !password) {
            ToastAndroid.show('Please fill all the fields', ToastAndroid.LONG);
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.replace('/mytrip');
        console.log(user);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);

        if (errorCode === 'auth/invalid-credential') {
            ToastAndroid.show('Invalid credentials', ToastAndroid.LONG);
        }

    });
    }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{
            padding:25,
            backgroundColor: Colors.white,
            height: '100%',
            paddingTop: 70,

        }}>
        <TouchableOpacity onPress={()=> router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 20,
        }}>Let's Sign You In</Text>
        <Text style={{
            fontSize: 30,
            color: Colors.gray,
            marginTop: 16,
        }}>Welcome Back</Text>
        <Text style={{
            fontSize: 29,
            color: Colors.gray,
            marginTop: 16,
        }}>You've been missed!</Text>
            <View style={{
                marginTop: 15,
            }}>
                <Text style={{
                    fontSize: 18,
                    marginTop: 20,
                }}>Email</Text>
                <TextInput style={{
                    ...styles.input,
                    marginTop: 5,
                }}
                placeholder='Enter your email'
                onChangeText={(value)=> setEmail(value)}
                />
            </View>
            <View style={{
                marginTop: 0,
            }}>
                <Text style={{
                    fontSize: 18,
                    marginTop: 10,
                }}>Password</Text>
                <TextInput style={{
                    ...styles.input,
                    marginTop: 5,
                }}
                secureTextEntry={true}
                onChangeText={(value)=> setPassword(value)}
                placeholder='Enter your password'
                />
            </View>
            <View style={{
                marginTop: 16,
            }}>
                <Text style={{
                    fontSize: 16,
                    marginTop: 0,
                }}>Forgot Password?</Text>
            </View>
            <View style={{
                marginTop: 2,
            }}>
                <Text style={{
                    fontSize: 15,
                    marginTop: 0,
                }}>Don't have an account? Sign Up</Text>
            </View>
            <TouchableOpacity onPress={OnSignIn}
            style={{
                padding: 20,
                backgroundColor: Colors.black,
                borderRadius: 20,
                marginTop: 28,
            }}>
                <Text style={{
                    color: Colors.white,
                    textAlign: 'center',
                    fontSize: 20,
                    marginTop: 0,
                }}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => router.replace('auth/sign-up')}
            style={{
                padding: 20,
                backgroundColor: Colors.white,
                borderRadius: 20,
                marginTop: 25,
                borderWidth: 1,
            }}>
                <Text style={{
                    color: Colors.black,
                    textAlign: 'center',
                    fontSize: 20,
                    marginTop: 0,
                }}>Create Account</Text>
            </TouchableOpacity>

        </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.gray,
        padding: 15,
        fontSize: 16,
    }
})

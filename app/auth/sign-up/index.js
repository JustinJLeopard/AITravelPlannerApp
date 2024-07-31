import { View, Text, TextInput, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Colors } from './../../../constants/Colors.ts'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './../../../configs/FirebaseConfig'

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  const OnCreateAccount = () => {

    if (!email || !password || !fullName) {
      alert('Please fill all the fields');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    console.log(user);
    ToastAndroid.show('Account Created Successfully', ToastAndroid.BOTTOM);
    router.replace('/mytrip');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode);
    // ..
  });
  }


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          padding: 25,
          paddingTop: 50,
        }}
      >
      <TouchableOpacity onPress={()=> router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
        <Text style= {{
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: 20,
        }}>Create A New Account</Text>
              <View style={{
                  marginTop: 15,
              }}>
                  <Text style={{
                      fontSize: 18,
                      marginTop: 20,
                  }}>Full Name</Text>
                  <TextInput style={{
                      ...styles.input,
                      marginTop: 5,
                  }}
                  placeholder='Enter your full name'
                  onChangeText={(value)=> setFullName(value)}
                  />
              </View>
              <View style={{
                  marginTop: 0,
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
                  placeholder='Enter your password'
                  onChangeText={(value)=> setPassword(value)}
                  />
              </View>
              <TouchableOpacity onPress={OnCreateAccount}
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
                  }}>Create Account</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => router.replace('auth/sign-in')}
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
                  }}>Sign In</Text>
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

import { View, Text } from 'react-native'
import { React } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from './../../constants/Colors.ts'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'

export default function StartNewTripCard() {
    const router = useRouter();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View
        style={{
            padding: 20,
            marginTop: 50,
            display: 'flex',
            alignItems: 'center',
            gap: 24,
        }}
    >
        <Ionicons name="location-sharp" size={50} color={Colors.black} />
      <Text
            style={{
                fontSize: 20,
                marginTop: 10,
                fontWeight: 'bold',
            }}
      >No trips planned yet
      </Text>
      <Text
            style={{
                fontSize: 20,
                marginTop: 15,
                textAlign: 'center',
                color: Colors.gray,
            }}
      > Looks like it's time to plan your next adventure! Get started below
      </Text>
        <TouchableOpacity
            onPress={()=> router.push('/create-trip/search-place')}
                style={{
                    backgroundColor: Colors.black,
                    padding: 15,
                    borderRadius: 15,
                    marginTop: 20,

                }}
        >
            <Text
                style={{
                    color: Colors.white,
                    fontSize: 17,
                }}
            >Start a new trip
            </Text>
        </TouchableOpacity>
    </View>
    </GestureHandlerRootView>
  )
}

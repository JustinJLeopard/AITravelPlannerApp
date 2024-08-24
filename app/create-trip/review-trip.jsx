import { View, Text } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { useNavigation } from 'expo-router';
import { Colors } from './../../constants/Colors.ts'
import Ionicons from '@expo/vector-icons/Ionicons';
import { CreateTripContext } from '../../context/CreateTripContext';


export default function ReviewTrip() {

  const navigation = useNavigation();

  const {tripData, setTripData} = useContext(CreateTripContext);

  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    })
  }, []);

  return (
    <View style= {{
      padding: 25,
      paddingTop: 75,
      backgroundColor: Colors.white,
      height: '100%',
    }}>
      <Text style={{
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 25,
      }}>Review Your Trip</Text>
      <View>
        <Text style={{
          fontSize: 20,
          marginTop: 20,
          fontWeight: 'bold',
        }}>
          Before generating your trip, please review the details below:
        </Text>
      </View>
      <View style={{
          flexDirection: 'row',
          marginTop: 20,
        }}>
          <Ionicons name="location-sharp" size={34} color="black" />
          <Text style={{
            fontSize: 20,
            marginLeft: 10,
          }}>{tripData?.locationInfo?.name}</Text>
      </View>
      <View style={{
          flexDirection: 'row',
          marginTop: 20,
        }}>
          <Ionicons name="location-sharp" size={34} color="black" />
          <Text style={{
            fontSize: 20,
            marginLeft: 10,
          }}>{tripData?.locationInfo?.name}</Text>
      </View>
    </View>
  )
}

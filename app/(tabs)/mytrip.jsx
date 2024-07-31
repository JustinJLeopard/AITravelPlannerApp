import { View, Text } from 'react-native'
import { React, useState } from 'react'
import { Colors } from './../../constants/Colors.ts'
import { Ionicons } from '@expo/vector-icons'
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard.jsx';

export default function MyTrip() {

    const [userTrips, setUserTrips] = useState([]);

  return (
    <View style= {{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.white,
        height: '100%',
    }}>
        <View
            style={{
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',

            }}>My Trips</Text>
            <Ionicons name="add-circle" size={50} color={Colors.black} />
        </View>
        {userTrips?.length==0?
          <StartNewTripCard />: null
        }
    </View>
  )
}

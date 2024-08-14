import { View, Text } from 'react-native'
import  React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from './../../constants/Colors.ts'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from './../../context/CreateTripContext.js';

export default function SearchPlace() {

    const navigation = useNavigation();
    const {tripData, setTripData}= useContext(CreateTripContext);
    const router= useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Search'
        })
    }, [])

    useEffect(() => {
        console.log(tripData);
    }, [tripData])

  return (
    <View
        style={{
            padding: 25,
            paddingTop:75,
            backgroundColor: Colors.white,
            height: '100%',
        }}
    >
      <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setTripData({
            locationInfo: {
                name: data.description,
                coordinates: details?.geometry.location,
                photoRef: details?.photos[0]?.photo_reference,
                url: details?.url,
            }
        });
        router.push('/create-trip/select-traveler');
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}
        styles={{
            textInput: {
                backgroundColor: Colors.white,
                borderRadius: 10,
                padding: 10,
                fontSize: 16,
                fontWeight: 'bold',
            },
            textInputContainer: {
                backgroundColor: Colors.white,
                borderRadius: 10,
                padding: 10,
                fontSize: 16,
                fontWeight: 'bold',
                shadowColor: 'black',
                shadowOffset: {
                    width: 5,
                    height: 10,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 10,
                marginTop: 25,
            },
            listView: {
                backgroundColor: Colors.white,
                borderRadius: 10,
                padding: 10,
                fontSize: 16,
                fontWeight: 'bold',
                shadowColor: 'black',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }
        }}
    />
    </View>
  )
}

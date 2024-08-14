import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { SelectTravlersList } from './../../constants/Options';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FlatList } from 'react-native';
import { OptionCard } from './../../components/CreateTrip/OptionCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CreateTripContext } from './../../context/CreateTripContext';
import { useContext } from 'react';

export default function SelectTraveler() {

    const navigation = useNavigation();
    const router = useRouter();
    const [selectedTraveler, setSelectedTraveler] = useState();
    const {tripData, setTripData}= useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        });
    }, []);

    useEffect(() => {
        setTripData({
            ...tripData,
            traveler: selectedTraveler,
        })
    }, [selectedTraveler])

    useEffect(() => {
        console.log(tripData);
    }, [tripData])

return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <View
            style={{
                padding: 25,
                paddingTop: 75,
                backgroundColor: Colors.white,
                height: '100%',
            }}
        >
            <Text
                style={{
                    fontSize: 35,
                    fontWeight: 'bold',
                    marginTop: 20,
                }}
            >
                Who's traveling?
            </Text>
            <View style={styles.container}>
                <FlatList
                    data={SelectTravlersList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => setSelectedTraveler(item.title)}>
                            <OptionCard item={item} selectedTraveler={selectedTraveler} />
                        </TouchableOpacity>
                    )}
                />
            </View>
            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Colors.black,
                    padding: 15,
                    borderRadius: 15,
                    marginTop: 0,
                    marginBottom: 0,
                }}
                onPress={() => router.push('/create-trip/select-dates')}>
                    <Text
                        style={{
                            fontSize: 16,
                            color: Colors.white,
                            marginTop: 1,
                        }}
                    >
                        Continue
                    </Text>
            </TouchableOpacity>
        </View>
    </GestureHandlerRootView>
);
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

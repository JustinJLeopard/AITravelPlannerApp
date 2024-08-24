import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect } from 'react'
import { useNavigation } from 'expo-router';
import { Colors } from './../../constants/Colors.ts'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { SelectBudgetOptions } from '../../constants/Options.js';
import { OptionCard } from './../../components/CreateTrip/OptionCard';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CreateTripContext } from '../../context/CreateTripContext.js';
import { useContext } from 'react';
import { useRouter } from 'expo-router';

export default function SelectBudget() {

    const navigation = useNavigation();

    const [selectedBudget, setSelectedBudget] = useState();

    const {tripData, setTripData}= useContext(CreateTripContext);

    const router = useRouter();

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
            budget: selectedBudget,
        })
    }, [selectedBudget])


    const onClickContinue = () => {
      if (!selectedBudget) {
          ToastAndroid.show('Please select budget', ToastAndroid.LONG);
          return;
      }
      router.push('/create-trip/review-trip');
    }

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
      >SelectBudget</Text>

      <View
            style={{
                marginTop: 20,
            }}
      >
        <Text
            style={{
                fontSize: 20,
                fontWeight: 'bold',
            }}
        >Choose spending for your trip</Text>

      <FlatList
        data={SelectBudgetOptions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
          style= {styles.container}
           onPress={() => setSelectedBudget(item.title)}>
            <OptionCard item={item} selectedBudget={selectedBudget} />
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
                onPress={() => onClickContinue()}>
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
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });



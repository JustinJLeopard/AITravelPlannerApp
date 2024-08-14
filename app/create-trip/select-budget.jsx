import { View, Text, StyleSheet } from 'react-native'
import React, {useEffect } from 'react'
import { useNavigation } from 'expo-router';
import { Colors } from './../../constants/Colors.ts'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { SelectBudgetOptions } from '../../constants/Options.js';
import { OptionCard } from './../../components/CreateTrip/OptionCard';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SelectBudget() {

    const navigation = useNavigation();

    const [selectedBudget, setSelectedBudget] = useState();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        });
    }, []);

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



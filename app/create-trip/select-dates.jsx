import { View, Text, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from './../../constants/Colors.ts'
import CalendarPicker from "react-native-calendar-picker";
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext.js';


export default function SelectDates() {

    const navigation = useNavigation();

    const [startDate, setStartDate] = useState();

    const [endDate, setEndDate] = useState();

    const {tripData, setTripData}= useContext(CreateTripContext);


    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        });
    }, []);

    const onDateChange = (date, type) => {
        console.log(date, type);
        if (type === 'START_DATE') {
            setStartDate(moment(date));
        } else {
            setEndDate(moment(date));
        }
    }

    const onDateSelectionContinue = () => {
        if (!startDate || !endDate) {
            ToastAndroid.show('Please select start and end date', ToastAndroid.LONG);
            return;
        }
        const totalNoOfDays = endDate.diff(startDate, 'days');
        setTripData({
            ...tripData,
            startDate: startDate,
            endDate: endDate,
            totalNoOfDays: totalNoOfDays + 1,
        });
        router.push('/create-trip/select-budget');
    }


  return (
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
                marginTop: 0,
                alignSelf: 'center',
            }}
      >Travel Dates</Text>
      <CalendarPicker
        onDateChange={onDateChange}
        allowRangeSelection={true}
        selectedDayColor={Colors.blue}
        selectedDayTextColor={Colors.white}
        todayBackgroundColor={Colors.lightBlue}
        minDate={new Date()}
        selectedRangeStartStyle={{ backgroundColor: Colors.green }}
        selectedRangeEndStyle={{ backgroundColor: Colors.red }}
        selectedRangeStyle={{ backgroundColor: Colors.cyan}}
        textStyle={{ color: Colors.darkGray }}
        todayTextStyle={{ color: Colors.darkBlue }}
        selectedDayTextStyle={{ color: Colors.black }}
        maxRangeDuration={30}
      />

      <GestureHandlerRootView style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={onDateSelectionContinue}
                style={{
                    backgroundColor: Colors.black,
                    padding: 16,
                    borderRadius: 25,
                    marginTop: 25,
                }}
            >
                <Text
                    style={{
                        color: Colors.white,
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}
                >Continue</Text>

            </TouchableOpacity>

      </GestureHandlerRootView>

    </View>
  )
}

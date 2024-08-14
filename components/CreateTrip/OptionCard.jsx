import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Colors } from './../../constants/Colors.ts';

export const OptionCard = ({ item, selectedTraveler, selectedBudget }) => {
  const isSelected = selectedTraveler === item.title || selectedBudget === item.title;

  return (
    <View style={[styles.card, isSelected && styles.selectedCard]}>
      <FontAwesomeIcon icon={item.icon} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15, // Reduced padding
    marginVertical: 10, // Reduced margin
    backgroundColor: '#fff',
    borderRadius: 10, // Slightly smaller border radius
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8, // Slightly smaller shadow radius
    shadowOffset: { width: 0, height: 4 },
    elevation: 4, // Slightly smaller elevation
    borderWidth: 1,
    borderColor: '#ddd',
    width: 300,
  },
  selectedCard: {
    backgroundColor: '#e0f7fa', // Change the background color when selected
    borderColor: '#0a7ea4',
  },
  icon: {
    marginBottom: 8, // Reduced margin
    color: Colors.black, // Changed icon
    alignSelf: 'center',
  },
  title: {
    fontSize: 20, // Reduced font size
    fontWeight: 'bold',
    marginBottom: 4, // Reduced margin
    alignSelf: 'center',
  },
  description: {
    fontSize: 14, // Reduced font size
    color: '#666',
    marginBottom: 4, // Reduced margin
    alignSelf: 'center',
  },
  people: {
    fontSize: 12, // Reduced font size
    color: '#999',
    alignSelf: 'center',
  },
});

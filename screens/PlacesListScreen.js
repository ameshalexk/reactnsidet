import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImagePicker from '../components/ImagePicker';

const PlacesListScreen = props => {
  return (
    <View>
      <Text>PlacesListScreen</Text>
      <ImagePicker/>
    </View>
  );
};

PlacesListScreen.navigationOptions = {
    headerTitle: 'All Places'
};

const styles = StyleSheet.create({});

export default PlacesListScreen;

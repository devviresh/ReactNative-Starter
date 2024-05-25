import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(props);
  const name = "Viresh Dev";
  return (
    <View style={{ backgroundColor: 'red' }}>
      <Text style={styles.greet}>Hii there..</Text>
      <Text style={styles.name}>My name is {name}</Text>
      <Button style={styles.button} title="Component Screen"
        onPress={() => {
          navigation.navigate('Component')
        }}
      />
      <Button style={styles.button} title="List Screen"
        onPress={() => {
          navigation.navigate('List')
        }}
      />
      <Button style={styles.button} title="Image Screen"
        onPress={() => {
          navigation.navigate('Image')
        }}
      />
      <Button style={styles.button} title="Counter Screen"
        onPress={() => {
          navigation.navigate('Counter')
        }}
      />
      <Button style={styles.button} title="Color Screen"
        onPress={() => {
          navigation.navigate('Color')
        }}
      />
      <Button style={styles.button} title="Hue Screen"
        onPress={() => {
          navigation.navigate('Hue')
        }}
      />
      <Button style={styles.button} title="Text Screen"
        onPress={() => {
          navigation.navigate('Text')
        }}
      />
      <Button style={styles.button} title="Box Screen"
        onPress={() => {
          navigation.navigate('Box')
        }}
      />
      {/* <TouchableOpacity onPress={() => {
        props.navigation.navigate('List')
      }}>
        <Text>Go to List</Text>
      </TouchableOpacity> */}
    </View>);
};

const styles = StyleSheet.create({
  greet: {
    fontSize: 40,
  },
  name: {
    fontSize: 20,
  },
  // button: {
  //   margin: 20,
  //   padding: 20
  // }
});

export default HomeScreen;

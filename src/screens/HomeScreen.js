import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(props);
  const name = "Viresh Dev";
  return (
    <View>
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
      {/* <TouchableOpacity onPress={() => {
        props.navigation.navigate('List')
      }}>
        <Text>Go to List</Text>
      </TouchableOpacity> */}
    </View>);
};

const styles = StyleSheet.create({
  greet: {
    fontSize: 30,
  },
  name: {
    fontSize: 20,
  },
  button: {
    margin: 20,
    padding: 20
  }
});

export default HomeScreen;
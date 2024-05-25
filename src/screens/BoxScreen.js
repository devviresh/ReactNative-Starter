import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.red}></View>
      <View style={styles.green}></View>
      <View style={styles.blue}></View>
    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'


  },
  red: {
    backgroundColor: 'red',
    height: 100,
    width: 100

  },
  green: {
    backgroundColor: 'green',
    // top: 100,
    marginTop:100,
    height: 100, width: 100

  },
  blue: {
    backgroundColor: 'blue',
    height: 100, width: 100
  }

})
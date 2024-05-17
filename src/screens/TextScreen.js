import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const TextScreen = () => {
  const [name, setName] = useState("")

  const isValidPassword =  (name)=>{
    return name.length <6 ? false:true
  }

  return (
    <View>
      <Text>Enter Name</Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.input}
        onChangeText={(value) => setName(value)}
      />
      <Text>My name is {name}</Text>

      {isValidPassword(name) ? <Text>Perfect</Text> : <Text>OOps</Text>}

    </View>
  )
}

export default TextScreen

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
})
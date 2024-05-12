import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
    const [count, setCount]=useState(0)

    return <View>
        <Text>Counter Screen</Text>
        <Button title="Increase" onPress={() => {
            setCount(count+1);
        }} />
        <Button title="Decrease" onPress={() => {
            setCount(count-1);
        }} />
        <Text>Current Count : {count}</Text>

    </View>

}

const styles = StyleSheet.create({})

export default CounterScreen;
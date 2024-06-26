import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([])

    return <View>
        <Text>Color Screen</Text>

        <Button title="Add Colors" onPress={() => {
            setColors([...colors, randomRGB()])
        }} />
        <Button title="Refresh" onPress={() => {
            setColors([])
        }} />

        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item}
            data={colors}
            renderItem={({ item }) => {
                return <View
                    style={{ height: 100, backgroundColor: item }}
                />
            }} />

    </View>
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({});

export default ColorScreen;
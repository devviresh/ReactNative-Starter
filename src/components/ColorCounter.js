import React from "react";
import { Text, Button, View, StyleSheet } from "react-native";

const ColorCounter = ({ color, onMore, onLess }) => {
    return <View>
        <Text>{color}</Text>
        <Button
            title={`More ${color}`}
            onPress={() => onMore()}
        />
        <Button
            title={`Less ${color}`}
            onPress={() => onLess()}
        />
    </View>
}

const styles = StyleSheet.create({})

export default ColorCounter;
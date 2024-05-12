import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ImageDetail = ({image, title}) => {
    return <View>
        <Image source={image} />
        <Text>{title}</Text>
    </View>;
};

const styles = StyleSheet.create({})

export default ImageDetail;
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

export default function IniciarSecion() {
    return(
        <View style={styles.Container}>
            <Text>
                Bienvenido/a
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    Container:{
        width: "100%",
        height : "100%",
        backgroundColor: "lime"
    }
})
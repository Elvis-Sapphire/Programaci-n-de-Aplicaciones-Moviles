import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

export default function Notificaciones() {
    return(
        <View style={styles.Container}>
            <Text>
                No hay Notificaciones disponibles
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
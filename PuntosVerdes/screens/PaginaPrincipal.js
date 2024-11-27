import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Pressable } from 'react-native';

export default function PaginaPrincipal() {
    return(
        <View style={styles.Container}>
            <Image style={styles.Imagen1} source={require("../Logo.png")}/>
            <Pressable>
                <Image style={styles.Boton1} source={require("../assets/Notificaciones 1.png")}/>
            </Pressable>
        </View>
    )
}

const styles=StyleSheet.create({
    Container:{
        flexDirection:"column",
        width: "100%",
        height : "100%",
        backgroundColor: "lime",
        justifyContent: "flex-start",
        alignItems: "center"  
    },

    Imagen1:{
        width: 170,
        height: 170,
        resizeMode: "center"

    }
})
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function PaginaPrincipal({navigation}) {
    return(
        <View style={styles.Container}>
            <Image style={styles.Imagen1} source={require("../Logo.png")}/>
            <View style={styles.ContenedorBoton}>
                
                <View>
                <Pressable onPress={()=>{ 
                    navigation.navigate('IniciarSeción')
                    
                }}>
                    <FontAwesome name='user-circle-o' size={50}/>
                
                </Pressable>
                <Pressable onPress={()=>{ 
                    navigation.navigate('Notificaciones')
                    
                }}>
                <FontAwesome name='bell' size={50}/>
                </Pressable>
                </View>
                <View>
                <Pressable onPress={()=>{ 
                    navigation.navigate('Configuraciones')
                    
                }}>
                    <Ionicons name='settings' size={50}/>
                </Pressable>
                <Pressable onPress={()=>{ 
                    navigation.navigate('Ubicaciones')
                }}>
                    <MaterialCommunityIcons name='google-maps' size={50}/>
                </Pressable>
                </View>  
            </View>
        </View>
        
    )
}

const styles=StyleSheet.create({
    Container:{
        flexDirection:"column",
        width: "100%",
        height : "100%",
        backgroundColor: "lime",
        justifyContent: "flex-end",
        alignItems: "center"
    },

    Imagen1:{
        width: 170,
        height: 170,
        resizeMode: "center",
        marginBottom: 250
    },
    ContenedorBoton:{
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 120
    }
})
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import appfirebase from '../Credenciales';appfirebase
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore';
import { CardAnimationContext } from '@react-navigation/stack';

const db=getFirestore(appfirebase)
export default function Ubicaciones() {
    const [latitude,setlatitude]=useState()
    const [longitude,setlongitude]=useState()
    async function cargando() {
        try {
            const Locaciones=await getDocs(collection(db,"Geopuntos"))
            Locaciones.forEach((doc) => {

            
            
                const Guardando=doc.data()
                const lat=Guardando.latitude
                const lon=Guardando.longitude
                setlatitude(lat)
                setlongitude(lon)
        })
            
        } catch (error) {
            
        }
    }
        
    
    useEffect(()=>{cargando()})
    return (
        <View style={styles.Container}>
            <MapView initialRegion={{ 
                latitude: -42.46884912693577, 
                longitude: -73.51283398922824,
                latitudeDelta: 0.800,
                longitudeDelta: 0.800 }} style={styles.Mapa}>
                <Marker coordinate={{ 
                    latitude: -42.46884912693577, 
                    longitude: -73.51283398922824 }} title='Puntos Verdes' description='Hola' />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: "100%",
        height: "100%",
        backgroundColor: "lime"
    },
    Mapa: {
        width: "100%",
        height: "100%",
        
    }

})
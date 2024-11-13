import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function PuntosVerdesScreen() {
  const [puntos, setPuntos] = useState([]);

  useEffect(() => {
    // Simulación de datos. Luego puedes reemplazar esto con una API.
    const puntosMock = [
      { id: '1', nombre: 'Punto Verde 1', direccion: 'Calle Falsa 123' },
      { id: '2', nombre: 'Punto Verde 2', direccion: 'Av. Verde 456' },
    ];
    setPuntos(puntosMock);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Puntos Verdes</Text>
      <FlatList
        data={puntos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.nombre}</Text>
            <Text style={styles.itemText}>{item.direccion}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  itemText: { fontSize: 18 },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient} from "expo-linear-gradient"

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["blue","purple"]} style={styles.Gradiente}>
      <Text style={styles.Texto}>
        Hola Bienvenido
      </Text>
      </LinearGradient>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Gradiente:{
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  Texto:{
    color: "green",
    fontSize: 20,
    fontWeight: "semibold"
  }
});

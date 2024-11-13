import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient} from "expo-linear-gradient"

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["white","white","white","lime"]} style={styles.Gradiente}>
        <Image resizeMode='contain' style={styles.Imagen_Logo} source={require("./assets/Logo_Original_Transparencia.png")}/>
        <Image resizeMethod='stretch' style={styles.imagen_Inicio} source={require("./assets/Imagen_Inicio_Seción_Google.png")} />
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
  Imagen_Logo:{
    height: 270,
    width: 270,
    position: 'absolute'
  },
  imagen_Inicio:{
    height: 150,
    width: 340,
    position: 'relative',
    marginTop: 600
  }
});

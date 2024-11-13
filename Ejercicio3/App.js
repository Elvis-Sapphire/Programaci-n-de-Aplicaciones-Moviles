import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableHighlight, Pressable} from 'react-native';
import { LinearGradient} from "expo-linear-gradient"

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["white","white","white","lime"]} style={styles.Gradiente}>
        <Image resizeMode='contain' style={styles.Imagen_Logo} source={require("./assets/Logo_Original_Transparencia.png")}/>
        <Button onPress={()=> {Alert.alert("Iniciando", "Listo")}} color={"teal"} style={styles.Boton_1} title='Boton_1'/>
        <TouchableHighlight onPress={()=> {Alert.alert("Iniciando", "Listo")}} activeOpacity={0.6} style={styles.Boton_2} underlayColor={"teal"}>
          <Text>
              Hola Bienvenidos
          </Text>
        </TouchableHighlight> 
        <Pressable onPress={()=> {Alert.alert("Iniciando", "Listo")}} style={styles.Boton_3}>
          <Image style={styles.Imagen_boton_3} resizeMode='contain' source={require("./assets/Icono_Google.png")}/>
          <Text>
            Iniciar Seción
          </Text>
        </Pressable>
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
  },
  Boton_1:{
  },
  Boton_2:{
    height: 30,
    width: 150,
    backgroundColor:"lime",
  },
  Boton_3: {
    height: -5,
    width: -10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "violet"
  },
  Imagen_boton_3:{
    height: 80,
    width: 80,
  }
});

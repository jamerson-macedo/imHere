// configuracoes de styles é com essa variavel
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#131016",
      padding: 24,
    },
    eventName:{
        color: "#FFF",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48,
      
    },
    eventDate:{
        color: "#6B6B6B",
        fontSize: 16,
      
    },
    input:{
       flex:1,
        backgroundColor:'#1F1E25',
        height:56,
       borderRadius:5,
       color:'#fff',
       padding:16,
       fontSize:16,
       marginRight:12

    },
    buttonText:{
        color:'#fff',
        fontSize:24
    },
    button:{
        width:56,
        height:56,
        borderRadius:5,
        backgroundColor:'#31cf67',
        alignItems:"center",
        justifyContent:"center"
    },
    form:{
        marginTop:36,
        marginBottom:42,
        width:'100%',
        flexDirection:"row"
    },
    listEmpty:{
        color:'#fff',
        fontSize:16,
        textAlign:"center"
    }
  });
  
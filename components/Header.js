import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Button, Platform} from 'react-native';

export default function Header() {

 
  return (
    <View   style={styles.main}>
     <Text style={styles.Text}>Список дел!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    paddingTop:40,
    height:120,
    width:'100%',
    backgroundColor:'silver'
     
  },
  Text:{
    fontSize:18,
    color:'red',
  
    textAlign:'center'

  }
});
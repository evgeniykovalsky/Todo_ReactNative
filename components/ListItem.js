import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default function ListItem({el,deleteHandler}) {

 
  return (
   <TouchableOpacity onPress={()=>deleteHandler(el.key)}>
    <Text style={styles.itemStyle}>{el.text}</Text>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    itemStyle:{
        padding:20,
        textAlign:'center',
        borderRadius:5,
        backgroundColor:'#fafafa',
        borderWidth:1,
        marginTop:20,
       width:'94%',
        marginLeft:'3%'
     }
  
});
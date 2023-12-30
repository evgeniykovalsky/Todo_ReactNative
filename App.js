import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView,Button, Platform,FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [listOfItems,setListOfItems]=useState([
    { text:'lkflj111j',key:'1'},
    { text:'lkflj111j',key:'2'},
    { text:'lkflj111j',key:'3'},
    { text:'lkflj111jроро',key:'4'},
    

  ]);
  const addHandler=(text)=>{
    if(text){
    setListOfItems((list)=>{
      return [
        {text:text,key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })}
  }
  const deleteHandler=(key)=>{
    setListOfItems((list)=>{
      return list.filter(listOfItems=>listOfItems.key!=key)
    })
  }
  
  return (
   
    
    <View   style={styles.container}>
     <Header/>
     <Form addHandler={addHandler}/>
     <View>
      <FlatList data={listOfItems} renderItem={({item})=>(
        <ListItem el={item} deleteHandler={deleteHandler}/>
      )} />
     </View>
     
    </View>
   
  );
}

const styles = StyleSheet.create({
  container:{
    width:'100%'
  }
});

import React, { useState } from "react";
import { StyleSheet, Text, Button, TextInput, View } from "react-native";

export default function Form({ addHandler }) {
  const [text, setText] = useState("");
  const onChange = (text) => {
  
      setText(text);
    
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Enter todo..."
      />
      <Button
        style={styles.mybutton}
        title="Добавить задачу"
        onPress={() => addHandler(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%",
  },
  mybutton: {
    color: "green",
    backgroundColor: "none",
  },
});

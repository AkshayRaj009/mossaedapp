import React from "react";
import { SafeAreaView, TextInput } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput style={{  height: 40,margin: 12,borderWidth: 1,padding: 10,}}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput style={{  height: 40,margin: 12,borderWidth: 1,padding: 10,}}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

export default UselessTextInput;
 
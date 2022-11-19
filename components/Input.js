import { TextInput, StyleSheet, View, Dimensions } from "react-native";
import React from "react";
const { width } = Dimensions.get("window");
const Input = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        value={props.value}
        onChangeText={props.onChangeText}
        autoCorrect={props.autoCorrect}
        onFocus={props.onFocus}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
      />
      {props.children}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    height: 55,
    marginHorizontal: 20,
    position: "relative",
  },

  input: {
    borderColor: "#0b0b0bc1",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    marginBottom: 5,
    width: "100%",
    height: "100%",
    borderRadius: 45,
    position: "absolute",
    top: 0,
    left: 0,
  },
});

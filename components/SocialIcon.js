import { StyleSheet, Pressable, Image } from "react-native";
import React from "react";

const SocialIcon = (props) => {
  return (
    <Pressable style={styles.iconButton}>
      <Image source={props.icon} style={styles.iconImage} />
    </Pressable>
  );
};

export default SocialIcon;

const styles = StyleSheet.create({
  iconButton: {
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#F2F2F2",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    borderColor: "#0B0B0B",
    borderWidth: 1,
  },

  iconImage: {
    width: 24,
    height: 24,
  },
});

import { StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import { width } from '../utils/dimension';

const StoreButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Image source={props.imageUrl} style={styles[props.storeName]} />
    </Pressable>
  );
};

export default StoreButton;

const styles = StyleSheet.create({
  googlePlay: {
    width: (134.2 / 390) * width,
    height: (38.8 / 390) * width,
    marginRight: 16,
  },

  appleStore: {
    width: (118.83 / 390) * width,
    height: (38.8 / 390) * width,
  },
});

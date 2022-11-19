import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import { width } from '../utils/dimension';

const LandingImage = (props) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={props.image} style={styles.landingImage} />
    </View>
  );
};

export default LandingImage;

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },

  landingImage: {
    width: (350 / 390) * width,
    height: ((353.9 - 316 + 359.36) / 390) * width,
    filter: 'drop-shadow(0px 2.3304px 11.652px rgba(30, 30, 30, 0.15))',
  },
});

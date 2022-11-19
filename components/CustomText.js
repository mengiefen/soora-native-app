import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Line from '../assets/images/line.png';
import { width } from '../utils/dimension';

const CustomText = (props) => {
  return (
    <View style={styles.textContainer}>
      <View style={styles.textWrapper}>
        <Image source={Line} style={styles.line} />
        <Text style={styles.subheading}> Coming Soon</Text>
      </View>
      <Text style={styles.heading}>{props.headingText}</Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 64,
    marginHorizontal: 32,
    textAlign: 'center',
    marginTop: 60,
  },

  textWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  line: {
    width: 17,
    height: 3,
  },

  subheading: {
    fontSize: 20,
    color: '#0B0B0B',
  },

  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0B0B0B',
    marginTop: 8,
    lineHeight: 50,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
  },
});

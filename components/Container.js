import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { width, height } from '../utils/dimension';

const Container = (props) => {
  const handlePress = () => {
    props.setShowMessageBox(false);
  };

  return (
    <ScrollView style={styles(props.bg).container} ref={props.scrollRef}>
      <LinearGradient
        colors={[
          'rgba(59, 89, 152, 0.1)',
          'rgba(59, 89, 152, 0.1)',
          'rgba(255, 0, 0, 0.05)',
        ]}
        style={styles(props.bg).gradient}
      >
        <TouchableOpacity
          style={styles(props.bg).overlay}
          onPress={handlePress}
          testID="overlay"
        >
          <Text style={styles(props.bg).text}>Overlay</Text>
        </TouchableOpacity>
        {props.children}
      </LinearGradient>
    </ScrollView>
  );
};

export default Container;

const styles = (bg = null) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      width: width,
      minHeight: height,
      position: 'relative',
      filter: 'blur(344.294px)',
    },

    overlay: {
      position: 'absolute',
      display: bg ? 'flex' : 'none',
      top: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: '100%',
      backgroundColor: bg,
      zIndex: 1,
    },

    overlayText: {
      color: 'transparent',
      fontSize: 0,
    },

    gradient: {
      width: '100%',
      height: '100%',
    },
  });

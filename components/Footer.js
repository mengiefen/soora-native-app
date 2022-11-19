import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        Copyright © 2022 Soora. All rights reserved
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },

  footerText: {
    fontSize: 15,
    color: '#0B0B0B',
    fontFamily: 'Inter-Regular',
  },
});

import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import COPY from '../assets/images/copy1.png';
import { width } from '../utils/dimension';

const MessageBox = () => {
  const [copy, setCopy] = useState(false);
  const handleCopy = () => {
    setCopy(true);
  };
  return (
    <View style={styles.container} testId="message-box">
      <Text style={styles.text}>Reach out to us through</Text>
      <View style={styles.emailContainer}>
        <Text style={styles.email}> sooratheapp@gmail.com </Text>
        <Pressable onPress={handleCopy} style={styles.iconContainer}>
          <Image source={COPY} style={styles.icon} />
          <Text>{copy ? 'copied' : 'copy'}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MessageBox;

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: 8,
    paddingHorizontal: 70,
    paddingVertical: 40,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    top: 850,
    zIndex: 2,
  },

  emailContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    overflow: 'hidden',
    minWidth: 50,
  },

  text: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
  },

  email: {
    color: '#3B5998',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 17,
    fontFamily: 'Inter-Bold',
  },

  icon: {
    width: 15,
    height: 20,
  },
});

import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';

const NotifyForm = () => {
  const [emailReceiveStatus, setEmailReceiveStatus] = useState(false);
  const handleNotify = () => {
    setEmailReceiveStatus(true);
  };

  return (
    <View style={styles.inputContainer}>
      <Input
        style={styles.input}
        keyboardType="email-address"
        testID="message-input"
      >
        <Pressable
          style={styles.notifyButton}
          onPress={handleNotify}
          testID="notify-me"
        >
          <Text style={styles.notifyMeButtonText}>Notify Me</Text>
        </Pressable>
      </Input>
      {emailReceiveStatus && (
        <Text style={styles.notifyMessage} testID="confirm-text">
          Your email address has been received.
        </Text>
      )}
      <Text>Don’t worry, we won’t spam you :)</Text>
    </View>
  );
};

export default NotifyForm;

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  notifyButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B0B0B',
    borderRadius: 45,
    zIndex: 1,
    position: 'absolute',
    top: 5,
    right: 5,
    width: 100,
    height: 45,
  },

  notifyMeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
  },

  notifyMessage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3B5998',
    textAlign: 'center',
    marginVertical: 6,
    fontFamily: 'Inter-Regular',
  },
});

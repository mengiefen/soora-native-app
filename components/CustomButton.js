import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

const CustomButton = ({
  children,
  onPress,
  color,
  label,
  title,
  variant,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      color={color}
      style={[styles.button, styles[variant]]}
      accessibilityLabel={label}
      sx={style}
    >
      <Text style={styles.text}> {title} </Text>
      {children}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontWeight: 'bold',
    backgroundColor: '#0B0B0B',
    color: '#fff',
    elevation: 3,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rounded: {
    borderRadius: 50,
    paddingHorizontal: 32,
    paddingVertical: 12,
  },

  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter-Bold',
  },
});

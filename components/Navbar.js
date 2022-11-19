import { StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';
import Logo from '../assets/images/logo1.png';
import ContactArrow from '../assets/images/contact-icon.png';
import CustomButton from './CustomButton';
import { width } from '../utils/dimension';

const Navbar = (props) => {
  const { handlePress } = props;

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <CustomButton
        title="Contact us"
        onPress={() => handlePress()}
        label="Contact us button"
      >
        <Image source={ContactArrow} style={styles.icon} />
      </CustomButton>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: width,
    paddingHorizontal: 14,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  icon: {
    width: 15,
    height: 15,
    marginLeft: 8,
  },

  logo: {
    width: 100,
    height: 20,
  },
});

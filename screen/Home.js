import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import React, { useState, useRef } from 'react';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import LandingImage from '../components/LandingImage';
import {
  LandingImage1,
  LandingImage2,
  GooglePlay,
  AppleStore,
} from '../data/assets';
import Line from '../assets/images/line.png';
import SocialIcon from '../components/SocialIcon';
import MessageBox from '../components/MessageBox';
import Footer from '../components/Footer';
import { socialMedia } from '../data/assets';
import StoreButton from '../components/StoreButton';

const { width } = Dimensions.get('window');

const Home = () => {
  const [showMessageBox, setShowMessageBox] = useState(false);
  const scrollRef = useRef(null);

  const handlePress = () => {
    setShowMessageBox(true);
    scrollRef.current?.scrollTo({ x: 0, y: 450, animated: true });
  };

  return (
    <Container
      bg={showMessageBox ? 'rgba(0, 0, 0, 0.2)' : null}
      setShowMessageBox={setShowMessageBox}
      scrollRef={scrollRef}
    >
      <Navbar handlePress={handlePress} />
      <View style={styles.textContainer}>
        <View style={styles.textWrapper}>
          <Image source={Line} style={styles.line} />
          <Text style={styles.subheading}> Coming Soon</Text>
        </View>
        <Text style={styles.heading}>Bringing Muslims Together</Text>
      </View>

      <View style={styles.storeContainer}>
        <StoreButton storeName="googlePlay" imageUrl={GooglePlay} />
        <StoreButton storeName="appleStore" imageUrl={AppleStore} />
      </View>

      <LandingImage image={LandingImage2} />

      <View style={styles.textContainer}>
        <View style={styles.textWrapper}>
          <Image source={Line} style={styles.line} />
          <Text style={styles.subheading}> Coming Soon</Text>
        </View>
        <Text style={styles.heading}>Get Notified When we Launch</Text>
      </View>

      <View style={styles.inputContainer}>
        <Input style={styles.input} keyboardType="email-address">
          <Pressable style={styles.notifyButton}>
            <Text style={styles.notifyMeButtonText}>Notify Me</Text>
          </Pressable>
        </Input>
        <Text style={styles.notifyMessage}>
          Your email address has been received.
        </Text>
        <Text>Don’t worry, we won’t spam you :)</Text>
      </View>

      <LandingImage image={LandingImage1} />

      <View style={styles.iconsContainer}>
        {socialMedia.map((icon) => (
          <SocialIcon key={icon.name} icon={icon.image} />
        ))}
      </View>
      <Footer />
      {showMessageBox && <MessageBox />}
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
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

  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 64,
    marginHorizontal: 32,
    textAlign: 'center',
    marginTop: 44,
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
  },

  storeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 64,
    marginHorizontal: 32,
    textAlign: 'center',
    marginTop: 24,
  },

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
  },

  notifyMessage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3B5998',
    textAlign: 'center',
    marginVertical: 6,
  },

  iconsContainer: {
    width: width,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    paddingBottom: 20,
    borderBottomColor: '#0B0B0B',
    borderBottomWidth: 1,
  },
});

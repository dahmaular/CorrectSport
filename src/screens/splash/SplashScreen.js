import {StyleSheet, Text, Image, Dimensions, View} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import logo from '../../assets/image/logowhite.png';
import {FadeInView} from '../../component/FadeIn';

const {width, height} = Dimensions.get('screen');
const SplashScreen = () => {
  let navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AppStack');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <FadeInView>
        <View style={styles.img}>
          <Image
            source={logo}
            style={{width: width / 1.3, height: height / 3}}
          />
        </View>
      </FadeInView>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181829',
    alignItems: 'center',
  },
  img: {
    marginTop: height / 3.5,
    width: width / 1.5,
    alignSelf: 'center',
    alignItems: 'center',
  },
});

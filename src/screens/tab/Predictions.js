import {StyleSheet, Text, Dimensions, View, Image} from 'react-native';
import React from 'react';

import comingSoon from '../../assets/image/coming-soon.png';

const {width, height} = Dimensions.get('screen');

const Predictions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.titleText}>Predictions</Text>
      </View>
      <View>
        <View style={styles.imgView}>
          <Image source={comingSoon} style={styles.img} />
        </View>
        <View>
          <Text style={styles.textCap}>The Live feature is coming soon</Text>
          <Text style={styles.textBody}>
            We want to take our time to build an amazing and robust predictions
            feature for you
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Predictions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  body: {
    padding: 10,
  },
  imgView: {
    marginTop: height / 3.5,
    alignSelf: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
  },
  textCap: {
    fontFamily: 'Montserrat-Bold',
    color: '#000',
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 10,
  },
  textBody: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#000',
    padding: 7,
    textAlign: 'center',
  },
});

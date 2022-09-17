import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ArrowBack from '../../assets/svg/Arrow - Left 2.svg';
import Arsenal from '../../assets/svg/arsenal.svg';
import Villa from '../../assets/svg/Villa.svg';

import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const MatchDetails = () => {
  let navigation = useNavigation();

  const StatCard = () => {
    return (
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <View style={styles.stat}>
          <Text>8</Text>
        </View>
        <View
          style={styles.stat}>
          <Text>Shooting</Text>
        </View>
        <View
          style={styles.stat}>
          <Text>12</Text>
        </View>
      </View>
    )
  }

  const Scores = () => {
    return (
        <View style={styles.scoreView}>
        <View style={styles.scoresItem}>
          <Arsenal />
          <Text style={styles.scoreText}>Arsenal</Text>
        </View>
        <View style={styles.scoresItem}>
          <Text style={styles.scores}>2 - 3</Text>
          <Text style={styles.scoreText}>90:15</Text>
        </View>
        <View style={styles.scoresItem}>
          <Villa />
          <Text style={styles.scoreText}>Aston Villa</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <ArrowBack />
        </TouchableOpacity>
        <View style={styles.textView}>
          <Text style={styles.headerText}>UEFA Champions League</Text>
        </View>
      </View>

      <Scores />

      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <View
          style={{...styles.detailsCard, backgroundColor: '#F4A58A',}}>
          <Text style={styles.detailText}>Match Details</Text>
        </View>
        <View
          style={styles.detailsCard}>
          <Text style={styles.detailText}>Line Up</Text>
        </View>
        <View
          style={styles.detailsCard}>
          <Text style={styles.detailText}>H2H</Text>
        </View>
      </View>

      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
    </View>
  );
};

export default MatchDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181829',
    // alignItems: 'center',
  },
  header: {
    width,
    height: 70,
    paddingHorizontal: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textView: {position: 'absolute', left: width / 3.6},
  headerText: {
    color: '#ffffff',
  },
  scoreView: {
    marginVertical: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  scoresItem: {marginHorizontal: 30, alignItems: 'center'},
  scoreText: {
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 20,
  },
  scores: {
    fontSize: 26,
    fontWeight: '700',
  },
  detailText: {
    fontWeight: '700',
    fontSize: 12,
  },
  detailsCard: {
    width: 115,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stat: {
    width: 110,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

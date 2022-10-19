import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import SpainFlag from '../assets/svg/Spain.svg';
import EnglandFlag from '../assets/svg/England.svg';
import Barca from '../assets/svg/barcelona.svg';
import Madrid from '../assets/svg/realmadrid.svg';
import Liverpool from '../assets/svg/Liverpool.svg';
import Villa from '../assets/svg/astonvilla.svg';
import Arrow from '../assets/svg/Arrow - Right 2.svg';
import {useNavigation} from '@react-navigation/native';
import {ServicesContext} from '../services/ServicesContext';
import {Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const LeagueCard = ({
  league,
  country,
  team1Image,
  team2Image,
  team1Name,
  team2Name,
  flag,
  team1Goals,
  team2Goals,
  timeStamp,
  onPress
}) => {
  let navigation = useNavigation();

  // console.log(`https://lsm-static-prod.livescore.com/medium/${team2Image}`)

  return (
    <View style={styles.container}>
      <View style={styles.country}>
        <View style={{flex: 1}}>
          <Text style={styles.league}>{league}</Text>
          <Text style={styles.lgCountry}>{country}</Text>
        </View>
        <Arrow style={styles.arrow} />
      </View>
      <TouchableOpacity
        style={styles.scoreCard}
        onPress={onPress}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.clubFlag}>
            
          </View>
          <View style={{flex: 1}}>
            <View>
              <View style={styles.clubFlag}>
                <Avatar.Image
                  size={20}
                  style={{backgroundColor:'transparent'}}
                  source={{
                    uri: `https://lsm-static-prod.livescore.com/medium/${team1Image}`,
                  }}
                />
                <View style={{flex: 1, marginHorizontal: 5}}>
                  <Text style={styles.clubText}>
                    {team1Name}
                  </Text>
                </View>
                <Text style={styles.clubText}>{team1Goals}</Text>
              </View>
              <View style={styles.clubFlag}>
                <Avatar.Image
                  source={{
                    uri: `https://lsm-static-prod.livescore.com/medium/${team2Image}`,
                  }}
                  style={{backgroundColor:'transparent'}}
                  size={20}
                />
                <View style={{flex: 1, marginHorizontal: 5}}>
                  <Text style={styles.clubText}>
                    {team2Name}
                  </Text>
                </View>
                <Text style={styles.clubText}>{team2Goals}</Text>
              </View>
            </View>
          </View>

          <View style={styles.matchStatus}>
            <Text style={styles.league}>{timeStamp}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LeagueCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  country: {
    flexDirection: 'row',
    marginLeft: 40
  },
  flag: {
    marginRight: 15,
    alignSelf: 'center',
  },
  league: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  lgCountry: {
    fontWeight: '200',
    fontSize: 13,
    color: '#AAAAAA',
  },
  arrow: {
    alignSelf: 'center',
  },
  scoreCard: {
    width: '100%',
    backgroundColor: '#2B2B3D',
    borderRadius: 16,
    height: 68,
    marginVertical: 10,
  },
  clubFlag: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 3,
    marginVertical:6
  },
  clubText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ffffff',
  },
  matchStatus: {
    backgroundColor: '#222232',
    width: 50,
    height: 68,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

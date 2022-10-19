import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ArrowBack from '../../assets/svg/Arrow - Left 2.svg';

import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useContext} from 'react';
import {ServicesContext} from '../../services/ServicesContext';
import {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {Avatar} from 'react-native-paper';

const {width, height} = Dimensions.get('screen');

const MatchDetails = ({route}) => {
  let navigation = useNavigation();
  const {item} = route.params;
  // console.log(item);
  const {fetchMatchDetails, matchDetails, isLoading} =
    useContext(ServicesContext);

  const [onMatchDetails, setOnMatchDetails] = useState(true);
  const [onLineUp, setOnLineUp] = useState(false);
  const [onH2H, setOnH2h] = useState(false);

  const onFetchMatchDetail = () => {
    fetchMatchDetails(item);
  };

  useEffect(() => {
    onFetchMatchDetail();
  }, []);

  // console.log(matchDetails?.Com);

  const StatCard = () => {
    return (
      <>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[0]?.Shof && matchDetails?.Stat[0]?.Shof}</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.detailText}>Shots off target</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[1]?.Shof && matchDetails?.Stat[1]?.Shof}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[0]?.Shon && matchDetails?.Stat[0]?.Shon}</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.detailText}>Shots on target</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[1]?.Shon && matchDetails?.Stat[1]?.Shon}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[0]?.Goa && matchDetails?.Stat[0]?.Goa}</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.detailText}>Goal Kicks</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[1]?.Goa && matchDetails?.Stat[1]?.Goa}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[0]?.Pss && matchDetails?.Stat[0]?.Pss }</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.detailText}>Possession(%)</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[1]?.Pss && matchDetails?.Stat[1]?.Pss}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[0]?.Cos && matchDetails?.Stat[0]?.Cos}</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.detailText}>Corner Kicks</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[1]?.Cos && matchDetails?.Stat[1]?.Cos}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[0]?.Fls && matchDetails?.Stat[0]?.Fls}</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.detailText}>Fouls</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[1]?.Fls && matchDetails?.Stat[1]?.Fls}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[0]?.Ths && matchDetails?.Stat[0]?.Ths}</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.detailText}>Throw-in</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[1]?.Ths && matchDetails?.Stat[1]?.Ths}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[0]?.Ycs && matchDetails?.Stat[0]?.Ycs}</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.detailText}>Yellow cards</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[1]?.Ycs && matchDetails?.Stat[1]?.Ycs}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[0]?.Rcs && matchDetails?.Stat[0]?.Rcs}</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.detailText}>Red cards</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.headerText}>{matchDetails?.Stat[1]?.Rcs && matchDetails?.Stat[1]?.Rcs}</Text>
          </View>
        </View>
      </>
    );
  };

  const Scores = () => {
    return (
      <View style={styles.scoreView}>
        <View style={styles.scoresItem}>
          <Avatar.Image
            size={80}
            style={{backgroundColor:'transparent'}}
            source={{
              uri: `https://lsm-static-prod.livescore.com/medium/${matchDetails?.T1[0]?.Img}`,
            }}
          />
          <Text style={styles.scoreText}>{matchDetails?.T1[0]?.Nm}</Text>
        </View>
        <View style={styles.scoresItem}>
          <Text style={styles.scores}>
            {matchDetails?.Tr1} - {matchDetails?.Tr2}
          </Text>
          <Text style={styles.scoreText}>{matchDetails?.Eps}</Text>
        </View>
        <View style={styles.scoresItem}>
          <Avatar.Image
            size={80}
            style={{backgroundColor:'transparent'}}
            source={{
              uri: `https://lsm-static-prod.livescore.com/medium/${matchDetails?.T2[0]?.Img}`,
            }}
          />
          <Text style={styles.scoreText}>{matchDetails?.T2[0]?.Nm}</Text>
        </View>
      </View>
    );
  };

  const LineUp = () => {
    const {Ps: Ps1} = matchDetails?.Lu[0];
    const {Ps: Ps2} = matchDetails?.Lu[1];
    // console.log('extracted players', matchDetails.Lu[0].Fo[0]);
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{padding: 10, flex: 1}}>
          <Text style={styles.detailText}>
            Formation: {matchDetails?.Lu[0]?.Fo[0]} -{' '}
            {matchDetails?.Lu[0]?.Fo[1]} - {matchDetails?.Lu[0]?.Fo[2]}
          </Text>

          {Ps1?.slice(0, 11).map(item => (
            <View style={{flexDirection: 'row', marginBottom: 6}}>
              <View style={{width: width / 12}}>
                <Text style={styles.detailText}>{item.Snu} </Text>
              </View>
              <Text style={styles.detailText}>{item.Shnm}</Text>
            </View>
          ))}
          <Text style={{color: 'grey', marginVertical: 10}}>Substitutes:</Text>
          {Ps1.slice(12).map(sub => (
            <>
              <View style={{flexDirection: 'row', marginBottom: 6}}>
                <View style={{width: width / 12}}>
                  <Text style={styles.detailText}>{sub.Snu} </Text>
                </View>
                <Text style={styles.detailText}>{sub.Shnm}</Text>
              </View>
            </>
          ))}
        </View>

        <View style={{padding: 10}}>
          <Text style={styles.detailText}>
            Formation: {matchDetails?.Lu[1]?.Fo[0]} -{' '}
            {matchDetails?.Lu[1]?.Fo[1]} - {matchDetails?.Lu[1]?.Fo[2]} -{' '}
            {matchDetails?.Lu[1]?.Fo[3]}
          </Text>

          {Ps2?.slice(0, 11).map(item => (
            <View style={{flexDirection: 'row', marginBottom: 6}}>
              <View style={{width: width / 12}}>
                <Text style={styles.detailText}>{item?.Snu} </Text>
              </View>
              <Text style={styles.detailText}>{item?.Shnm}</Text>
            </View>
          ))}
          <Text style={{color: 'grey', marginVertical: 10}}></Text>
          {Ps2.slice(12).map(sub => (
            <>
              <View style={{flexDirection: 'row', marginBottom: 6}}>
                <View style={{width: width / 12}}>
                  <Text style={styles.detailText}>{sub?.Snu} </Text>
                </View>
                <Text style={styles.detailText}>{sub?.Shnm}</Text>
              </View>
            </>
          ))}
        </View>
      </View>
    );
  };

  const Commentary = () => {
    return (
      <View>
        <View style={{padding: 10, flex: 1}}>
          {matchDetails?.Com.map(com => (
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderColor: 'grey',
                marginVertical: 5,
                marginHorizontal: 5,
                padding:3
              }}>
              <Text style={{color: '#fff'}}>{com.Min}' {' '}</Text>
              <Text style={{color: '#fff'}}>{com.Txt}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={{justifyContent: 'center', marginTop: height / 3}}>
          <ActivityIndicator size={'large'} color="#fff" animating={true} />
        </View>
      ) : (
        matchDetails && (
          <ScrollView>
            <View>
              <View style={styles.header}>
                <TouchableOpacity onPress={navigation.goBack}>
                  <ArrowBack />
                </TouchableOpacity>
                <View style={styles.textView}>
                  <Text style={styles.headerText}>
                    {matchDetails?.Stg?.Cnm}
                  </Text>
                </View>
              </View>

              <Scores />

              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    setOnH2h(false),
                      setOnLineUp(false),
                      setOnMatchDetails(true);
                  }}
                  style={
                    onMatchDetails
                      ? {
                          ...styles.detailsCard,
                          backgroundColor: '#F4A58A',
                        }
                      : styles.detailsCard
                  }>
                  <Text style={styles.detailText}>Match Details</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setOnH2h(false),
                      setOnLineUp(true),
                      setOnMatchDetails(false);
                  }}
                  style={
                    onLineUp
                      ? {
                          ...styles.detailsCard,
                          backgroundColor: '#F4A58A',
                        }
                      : styles.detailsCard
                  }>
                  <Text style={styles.detailText}>Line Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setOnH2h(true),
                      setOnLineUp(false),
                      setOnMatchDetails(false);
                  }}
                  style={
                    onH2H
                      ? {
                          ...styles.detailsCard,
                          backgroundColor: '#F4A58A',
                        }
                      : styles.detailsCard
                  }>
                  <Text style={styles.detailText}>Commentary</Text>
                </TouchableOpacity>
              </View>

              {onMatchDetails && matchDetails?.Stat && <StatCard />}
              {onLineUp && matchDetails?.Lu && <LineUp />}
              {onH2H && matchDetails?.Com && <Commentary />}
            </View>
          </ScrollView>
        )
      )}
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
    textTransform: 'uppercase',
  },
  // DetailsText: {
  //   color: '#ffffff',
  //   textTransform: 'uppercase'
  // },
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
    color: '#ffffff',
  },
  scores: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
  },
  detailText: {
    fontWeight: '700',
    fontSize: 12,
    color: '#ffffff',
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
  lineUp: {
    position: 'absolute',
    padding: 20,
    top: 10,
  },
  lineUp2: {
    position: 'absolute',
    padding: 10,
    top: 20,
    right: 0,
  },
});

import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {CategoryCard, Header, LeagueCard} from '../../component';
import Banner from '../../assets/svg/Banner.svg';
import Categories from '../../assets/Mock/Categories';
import Soccer from '../../assets/svg/soccer.svg';
import DatePicker from '../../component/DatePicker';
import {useContext} from 'react';
import {useEffect} from 'react';
import {ServicesContext} from '../../services/ServicesContext';
import moment from 'moment';
import {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import Arrow from '../../assets/svg/Arrow - Right 2.svg';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import {SliderBox} from 'react-native-image-slider-box';

import { BannerAdSize, BannerAd, TestIds } from 'react-native-google-mobile-ads';
const {width, height} = Dimensions.get('screen');

const sliderImage = [
  require('../../assets/image/kylian-mbappe.jpg'),
  require('../../assets/image/bernardo-silva.jpg'),
  require('../../assets/image/jurgen-klopp.jpg'),
  require('../../assets/image/diego-simeone.jpg'),
];

const Category = [
  {
    id: 1,
    title: 'Football',
    icon: <Soccer />,
  },

  {
    id: 2,
    title: 'Tennis',
    icon: <Soccer />,
  },

  {
    id: 3,
    title: 'Tech',
    icon: <Soccer />,
  },

  {
    id: 4,
    title: 'Care',
    icon: <Soccer />,
  },
];

const Home = () => {
  let navigation = useNavigation();
  const [matchDate, setMatchDate] = useState();
  const [displayLive, setDisplayLive] = useState(false);
  const [onlive, setOnLive] = useState(false);
  const [onToday, setOnToday] = useState(true);
  const [onDay1, setOnDay1] = useState(false);
  const [onDay2, setOnDay2] = useState(false);
  const [onDay3, setOnDay3] = useState(false);
  const [onDay1Before, setOnDay1Before] = useState(false);
  const [onDay2Before, setOnDay2Before] = useState(false);
  const [setColor, onSetColor] = useState(false);

  const [displayMatchByDate, setDisplayMatchByDate] = useState(false);

  // Coming days and current
  const today = moment(new Date()).format('ll').split(',');
  const day1 = moment(new Date()).add(1, 'day').format('llll').split(',');
  const day2 = moment(new Date()).add(2, 'day').format('llll').split(',');
  const day3 = moment(new Date()).add(3, 'day').format('llll').split(',');

  // Previous days
  const day1Befor = moment(new Date())
    .subtract(1, 'day')
    .format('llll')
    .split(',');
  const day2Befor = moment(new Date())
    .subtract(2, 'day')
    .format('llll')
    .split(',');

  const {
    liveMatches,
    fetchLiveMatch,
    fetchMatchByDate,
    todaysMatch,
    isLoading,
  } = useContext(ServicesContext);

  useEffect(() => {
    // fetchDay();
  }, []);

  const handleShowLiveMatch = () => {
    setOnDay1(false);
    setOnDay2(false);
    setOnDay3(false);
    setOnLive(true);
    setOnDay1Before(false);
    setOnDay2Before(false);
    setOnToday(false);
    setDisplayMatchByDate(false);
    fetchLiveMatch();
    setDisplayLive(true);
  };

  const fetchDay1 = () => {
    setOnDay1(true);
    setOnDay2(false);
    setOnDay3(false);
    setOnLive(false);
    setOnDay1Before(false);
    setOnDay2Before(false);
    setOnToday(false);

    setDisplayLive(false);
    setDisplayMatchByDate(false);
    const date = moment(new Date()).add(1, 'day').format('YYYYMMDD');
    setMatchDate(date);
    fetchMatchByDate(date);
    setDisplayMatchByDate(true);
  };

  const fetchDay2 = () => {
    setOnDay1(false);
    setOnDay2(true);
    setOnDay3(false);
    setOnLive(false);
    setOnDay1Before(false);
    setOnDay2Before(false);
    setOnToday(false);

    const date = moment(new Date()).add(2, 'day').format('YYYYMMDD');
    setMatchDate(date);
    // console.log(date);
    fetchMatchByDate(date);
  };

  const fetchDay3 = () => {
    setOnDay1(false);
    setOnDay2(false);
    setOnDay3(true);
    setOnLive(false);
    setOnDay1Before(false);
    setOnDay2Before(false);
    setOnToday(false);

    const date = moment(new Date()).add(3, 'day').format('YYYYMMDD');
    setMatchDate(date);
    // console.log(date);
    fetchMatchByDate(date);
  };

  const fetchDay = () => {
    setOnDay1(false);
    setOnDay2(false);
    setOnDay3(false);
    setOnLive(false);
    setOnDay1Before(false);
    setOnDay2Before(false);
    setOnToday(true);

    setDisplayLive(false);
    setDisplayMatchByDate(false);
    const date = moment(new Date()).format('YYYYMMDD');
    setMatchDate(date);
    fetchMatchByDate(date);
    setDisplayMatchByDate(true);
  };

  const fetchDay1Before = () => {
    setOnDay1(false);
    setOnDay2(false);
    setOnDay3(false);
    setOnLive(false);
    setOnDay1Before(true);
    setOnDay2Before(false);
    setOnToday(false);

    const date = moment(new Date()).subtract(1, 'day').format('YYYYMMDD');
    setMatchDate(date);
    // console.log(date);
    fetchMatchByDate(date);
  };

  const fetchDay2Before = () => {
    setOnDay1(false);
    setOnDay2(false);
    setOnDay3(false);
    setOnLive(false);
    setOnDay1Before(false);
    setOnDay2Before(true);
    setOnToday(false);

    const date = moment(new Date()).subtract(2, 'day').format('YYYYMMDD');
    setMatchDate(date);
    // console.log(date);
    fetchMatchByDate(date);
  };

  // console.log(todaysMatch);

  return (
    <View style={styles.container}>
      <Header title="CorrectScore" />
      <ScrollView>
        {/* <View>
          <Banner/>
        </View> */}
        <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
        requestNonPersonalizedAdsOnly: true,}}
        onAdLoaded={() => {
        console.log('Advert loaded');}}
        onAdFailedToLoad={(error) => {
        console.error('Advert failed to load: ', error);}}
        />
        <SliderBox
          images={sliderImage}
          sliderBoxHeight={200}
          // onCurrentImagePressed={index =>
          //   console.warn(`image ${index} pressed`)
          // }
          dotColor="orange"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
        />
        <FlatList
          data={Categories}
          horizontal
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 20,
          }}
          renderItem={({item}) => (
            <CategoryCard title={item.title} icon={item.icon} active={true} />
          )}
          keyExtractor={item => item.id.toString()}
        />

        <View style={styles.dateContainer}>
          <View style={styles.dateRow}>
            <TouchableOpacity
              style={
                onlive
                  ? {...styles.liveBox, backgroundColor: 'orange'}
                  : styles.liveBox
              }
              onPress={handleShowLiveMatch}>
              <Text style={styles.text}>LIVE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateBox} onPress={fetchDay2Before}>
              <Text
                style={
                  onDay2Before ? {...styles.text, color: 'orange'} : styles.text
                }>
                {day2Befor[0].toString()}
              </Text>
              <Text
                style={
                  onDay2Before
                    ? {...styles.subText, color: 'orange'}
                    : styles.subText
                }>
                {day2Befor[1].trim()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateBox} onPress={fetchDay1Before}>
              <Text
                style={
                  onDay1Before ? {...styles.text, color: 'orange'} : styles.text
                }>
                {day1Befor[0]}
              </Text>
              <Text
                style={
                  onDay1Before
                    ? {...styles.subText, color: 'orange'}
                    : styles.subText
                }>
                {day1Befor[1].trim()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.todayBox} onPress={fetchDay}>
              <Text
                style={
                  onToday
                    ? {...styles.todayText, color: 'orange'}
                    : styles.todayText
                }>
                TODAY
              </Text>
              <Text
                style={
                  onToday
                    ? {...styles.todaySubText, color: 'orange'}
                    : styles.todaySubText
                }>
                {today[0]}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateBox} onPress={fetchDay1}>
              <Text
                style={
                  onDay1 ? {...styles.text, color: 'orange'} : styles.text
                }>
                {day1[0]}
              </Text>
              <Text
                style={
                  onDay1 ? {...styles.subText, color: 'orange'} : styles.subText
                }>
                {day1[1].trim()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateBox} onPress={fetchDay2}>
              <Text
                style={
                  onDay2 ? {...styles.text, color: 'orange'} : styles.text
                }>
                {day2[0]}
              </Text>
              <Text
                style={
                  onDay2 ? {...styles.subText, color: 'orange'} : styles.subText
                }>
                {day2[1].trim()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateBox} onPress={fetchDay3}>
              <Text
                style={
                  onDay3 ? {...styles.text, color: 'orange'} : styles.text
                }>
                {day3[0]}
              </Text>
              <Text
                style={
                  onDay3 ? {...styles.subText, color: 'orange'} : styles.subText
                }>
                {day3[1].trim()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {isLoading ? (
          <ActivityIndicator size="small" animating={true} color="#fff" />
        ) : (
          <>
            {displayLive &&
              liveMatches.map(item => (
                <View style={styles.clubContainer}>
                  <View style={styles.country}>
                    <View style={{flex: 1}}>
                      <Text style={styles.league}>{item?.Snm}</Text>
                      <Text style={styles.lgCountry}>{item?.Cnm}</Text>
                    </View>
                    <Arrow style={styles.arrow} />
                  </View>
                  {item.Events.map(match => (
                    <TouchableOpacity
                      style={styles.scoreCard}
                      onPress={() =>
                        navigation.navigate('Details', {
                          item: match.Eid,
                        })
                      }>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.clubFlag}></View>
                        <View style={{flex: 1}}>
                          <View>
                            <View style={styles.clubFlag}>
                              <Avatar.Image
                                size={20}
                                style={{backgroundColor: 'transparent'}}
                                source={{
                                  uri: `https://lsm-static-prod.livescore.com/medium/${match?.T1[0]?.Img}`,
                                }}
                              />
                              <View style={{flex: 1, marginHorizontal: 5}}>
                                <Text style={styles.clubText}>
                                  {match?.T1[0]?.Nm}
                                </Text>
                              </View>
                              <Text style={styles.clubText}>{match?.Tr1}</Text>
                            </View>
                            <View style={styles.clubFlag}>
                              <Avatar.Image
                                source={{
                                  uri: `https://lsm-static-prod.livescore.com/medium/${match?.T2[0]?.Img}`,
                                }}
                                style={{backgroundColor: 'transparent'}}
                                size={20}
                              />
                              <View style={{flex: 1, marginHorizontal: 5}}>
                                <Text style={styles.clubText}>
                                  {match?.T2[0]?.Nm}
                                </Text>
                              </View>
                              <Text style={styles.clubText}>{match?.Tr2}</Text>
                            </View>
                          </View>
                        </View>

                        <View style={styles.matchStatus}>
                          <Text style={styles.league}>
                            {match?.Eps !== 'NS' ? match?.Eps : 'KO'}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}

            {displayMatchByDate &&
              todaysMatch?.map(item => (
                <View style={styles.clubContainer}>
                  <View style={styles.country}>
                    <View style={{flex: 1}}>
                      <Text style={styles.league}>{item?.Snm}</Text>
                      <Text style={styles.lgCountry}>{item?.Cnm}</Text>
                    </View>
                    <Arrow style={styles.arrow} />
                  </View>
                  {item.Events.map(match => (
                    <TouchableOpacity
                      style={styles.scoreCard}
                      onPress={() =>
                        navigation.navigate('Details', {
                          item: match.Eid,
                        })
                      }>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.clubFlag}></View>
                        <View style={{flex: 1}}>
                          <View>
                            <View style={styles.clubFlag}>
                              <Avatar.Image
                                size={20}
                                style={{backgroundColor: 'transparent'}}
                                source={{
                                  uri: `https://lsm-static-prod.livescore.com/medium/${match?.T1[0]?.Img}`,
                                }}
                              />
                              <View style={{flex: 1, marginHorizontal: 5}}>
                                <Text style={styles.clubText}>
                                  {match?.T1[0]?.Nm}
                                </Text>
                              </View>
                              <Text style={styles.clubText}>{match?.Tr1}</Text>
                            </View>
                            <View style={styles.clubFlag}>
                              <Avatar.Image
                                source={{
                                  uri: `https://lsm-static-prod.livescore.com/medium/${match?.T2[0]?.Img}`,
                                }}
                                style={{backgroundColor: 'transparent'}}
                                size={20}
                              />
                              <View style={{flex: 1, marginHorizontal: 5}}>
                                <Text style={styles.clubText}>
                                  {match?.T2[0]?.Nm}
                                </Text>
                              </View>
                              <Text style={styles.clubText}>{match?.Tr2}</Text>
                            </View>
                          </View>
                        </View>

                        <View style={styles.matchStatus}>
                          <Text style={styles.league}>
                            {match?.Eps !== 'NS' ? match?.Eps : 'KO'}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
          </>
        )}
        <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
        requestNonPersonalizedAdsOnly: true,}}
        onAdLoaded={() => {
        console.log('Advert loaded');}}
        onAdFailedToLoad={(error) => {
        console.error('Advert failed to load: ', error);}}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181829',
    alignItems: 'center',
  },
  clubContainer: {
    padding: 10,
  },
  country: {
    flexDirection: 'row',
    marginLeft: 40,
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
    marginVertical: 6,
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
  dateContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  dateRow: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
  },
  text: {
    color: '#EDEDED',
    textAlign: 'center',
    fontSize: 13,
    textTransform: 'uppercase',
  },
  subText: {
    color: '#EDEDED',
    fontSize: 11,
    textAlign: 'center',
    width: width / 10,
    textTransform: 'uppercase',
  },
  liveBox: {
    backgroundColor: 'grey',
    width: width / 9,
    padding: 5,
    height: 30,
    borderRadius: 8,
    marginRight: width * 0.009,
    justifyContent: 'center',
  },
  dateBox: {
    width: width / 9,
    padding: 5,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    marginHorizontal: width * 0.009,
  },
  todayBox: {
    width: width / 6.7,
    padding: 5,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    marginHorizontal: width * 0.009,
  },
  todaySubText: {
    color: '#EDEDED',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  todayText: {
    color: '#EDEDED',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

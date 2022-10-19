import {StyleSheet, Text, Dimensions, View, Image} from 'react-native';
import React, {useEffect, useContext} from 'react';

import comingSoon from '../../assets/image/coming-soon.png';
import {ServicesContext} from '../../services/ServicesContext';
import {ScrollView} from 'react-native';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BannerAdSize, BannerAd, TestIds } from 'react-native-google-mobile-ads';

const {width, height} = Dimensions.get('screen');

const News = () => {
  let navigation = useNavigation();
  const {newsList, fetchNewsList, isLoading} = useContext(ServicesContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // fetchNewsList();
  }, []);

  var groupBy = function (xs, key) {
    if (newsList.topStories !== undefined) {
      return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    }
  };
  const result = groupBy(newsList.topStories, 'categoryLabel');
  // console.log(result?.Football);
  // newsList && console.log(groupBy(newsList.topStories, 'categoryLabel'));
  // console.log(newsList.topStories);

  const TitleComponent = () => {
    return (
      <>
        <View style={styles.body}>
          <Text style={styles.titleText}>News</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesView}>
          {newsList?.categories?.map(item => (
            <TouchableOpacity
              onPress={() => {
                console.log(item), setIsActive(true);
              }}
              style={{
                // backgroundColor: '#FDFDFD',
                marginRight: 10,
                padding: 10,
                borderRadius: 25,
              }}>
              <Text
                style={{color: '#AAAAAA', fontWeight: 'bold', fontSize: 16}}>
                {item?.initialTitle}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesView}>
          {newsList?.featuredArticles?.map(item => (
            <TouchableOpacity
              onPress={() => {
                console.log(item), setIsActive(true);
              }}
              style={{
                marginRight: 10,
                borderRadius: 25,
              }}>
              <ImageBackground
                source={{uri: item?.mainMedia?.gallery?.url}}
                style={{
                  width: width / 1.5,
                  height: height / 6,
                  opacity: 0.6,
                  backgroundColor: 'black',
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 5,
                  paddingHorizontal: 5,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 16,
                    opacity: 1,
                  }}>
                  {item?.title}
                </Text>
                <Text
                  style={{
                    color: '#AAAAAA',
                    fontWeight: 'bold',
                    fontSize: 12,
                  }}>
                  Updated {item?.updatedAt?.time} hours ago
                </Text>
              </View>
            </TouchableOpacity>
          ))}
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
      </>
    );
  };

  const renderBody = ({item, index}) => {
    return (
      <View style={{marginTop: height * 0.05}}>
        <TouchableOpacity onPress={() => navigation.navigate("NewsDetails", {item:item.id})} style={{flexDirection: 'row'}}>
          <Image
            source={{uri: item?.mainMedia?.gallery?.url}}
            style={{width: width / 2.5, height: height / 9}}
          />
          {/* <Text style={{color: '#fff'}}>{item.type}</Text> */}
          <View style={{width: width / 1.8, paddingHorizontal: 10}}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: 'grey',
                  borderRadius: 10,
                  padding: 3,
                  paddingHorizontal: 5,
                }}>
                <Text style={{color: '#fff', fontSize: 12, fontWeight: 'bold'}}>
                  {item.categoryLabel}
                </Text>
              </View>
              <View style={{position:'absolute',marginLeft: width/2.3}}>
                <Text style={{color: 'grey', fontSize: 12, fontWeight: 'bold'}}>
                  {item.updatedAt?.time} {item?.updatedAt.unit.split('.')[1] == 'minutes' ? 'mins' : item?.updatedAt.unit.split('.')[1]} ago
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={{justifyContent: 'center', marginTop: height / 3}}>
          <ActivityIndicator
            color={'#fff'}
            animating={true}
            size="small"></ActivityIndicator>
        </View>
      ) : (
        <>
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
          <FlatList
            data={newsList?.topStories}
            ListHeaderComponent={TitleComponent()}
            renderItem={renderBody}
          />
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
        </>
      )}
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181829',
    // alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  categoriesView: {
    marginTop: 30,
  },
  body: {
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
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
  overlay: {
    // flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    // width: width,
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

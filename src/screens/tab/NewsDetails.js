import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import {ServicesContext} from '../../services/ServicesContext';
import {useEffect} from 'react';
import {ScrollView} from 'react-native';
import ArrowBack from '../../assets/svg/Arrow - Left 2.svg';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {ActivityIndicator} from 'react-native';
import HTMLView from 'react-native-htmlview';

import {BannerAdSize, BannerAd, TestIds} from 'react-native-google-mobile-ads';

const {width, height} = Dimensions.get('screen');

function renderNode(node, index, siblings, parent, defaultRenderer) {
  // console.log(node.name);
  if (node.name === 'undefined') {
    return <Img key={index} attribs={node.attribs} />;
  }
  // if (node.name == 'iframe') {
  //   const a = node.attribs;
  //   const iframeHtml = `<iframe src="${a.src}"></iframe>`;
  //   return (
  //     <View key={index} style={{width: Number(a.width), height: Number(a.height)}}>
  //       <WebView source={{html: iframeHtml}} />
  //     </View>
  //   );
  // }
}

const NewsDetails = ({route}) => {
  let navigation = useNavigation();
  const {item} = route.params;
  //   console.log(item);
  const {fetchNewsDetails, newsDetails, isLoading} =
    useContext(ServicesContext);

  const [onMatchDetails, setOnMatchDetails] = useState(true);
  const [onLineUp, setOnLineUp] = useState(false);
  const [onH2H, setOnH2h] = useState(false);

  const onFetchNewsDetail = () => {
    fetchNewsDetails(item);
  };

  useEffect(() => {
    onFetchNewsDetail();
  }, []);

  var mystring = 'crt/r2002_2';
  mystring = mystring.replace('/r', '/');

  //   console.log(mystring);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={{justifyContent: 'center', marginTop: height / 3}}>
          <ActivityIndicator size={'large'} color="#fff" animating={true} />
        </View>
      ) : (
        <ScrollView>
          <View>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.navigate('News')}>
                <ArrowBack />
              </TouchableOpacity>
              <View style={styles.textView}>
                <Text style={styles.headerText}>News</Text>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <View style={{marginBottom: 20}}>
                <Text
                  style={{
                    color: '#fff',
                    paddingHorizontal: 10,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {newsDetails?.adsTargeting?.newsArticleTitle}
                </Text>
              </View>
              <View>
                <Image
                  source={{uri: newsDetails?.article?.mainMedia?.gallery?.url}}
                  style={{width: width, height: height / 4}}
                />
                <Text
                  style={{color: '#fff', paddingHorizontal: 10, fontSize: 12}}>
                  {newsDetails?.article?.mainMedia?.gallery?.alt}{' '}
                </Text>
              </View>
            </View>

            <View style={{marginTop: 20}}>
              {newsDetails?.article?.body?.map(item => {
                {
                  /* let content = item?.data?.content?.replace(
                  /^<p>|<h2>|<\/h2>|<\/p>|&nbsp;/g,
                  '',
                );
                console.log(content); */
                }

                return (
                  <View style={{padding: 5}}>
                    <BannerAd
                      unitId={TestIds.BANNER}
                      size={BannerAdSize.FULL_BANNER}
                      requestOptions={{
                        requestNonPersonalizedAdsOnly: true,
                      }}
                      onAdLoaded={() => {
                        console.log('Advert loaded');
                      }}
                      onAdFailedToLoad={error => {
                        console.error('Advert failed to load: ', error);
                      }}
                    />

                    <HTMLView
                      value={item?.data?.content}
                      stylesheet={contents}
                      renderNode={renderNode}
                    />
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181829',
    // alignItems: 'center',
  },
  header: {
    width,
    height: 70,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textView: {position: 'absolute', left: width / 2.3},
  headerText: {
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  // DetailsText: {
  //   color: '#ffffff',
  //   textTransform: 'uppercase'
  // },
});

const contents = StyleSheet.create({
  p: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 23,
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CategoryCard, Header, LeagueCard} from '../../component';
import Banner from '../../assets/svg/Banner.svg';
import Categories from '../../assets/Mock/Categories';
import Soccer from '../../assets/svg/soccer.svg';
import DatePicker from '../../component/DatePicker';
import {useContext} from 'react';
import {useEffect} from 'react';
import {ServicesContext} from '../../services/ServicesContext';

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
  const {liveMatches, fetchLiveMatch, isLoading} = useContext(ServicesContext);

  useEffect(() => {
    // fetchLeague();
    // fetchLiveMatch();
  }, []);

  // console.log(liveMatches[0]?.Events[0]?.Eps);

  return (
    <View style={styles.container}>
      <Header title="CorrectScore" />
      <ScrollView>
        <View style={{width: '100%'}}>
          <Banner width={'100%'} />
        </View>
        <FlatList
          data={Categories}
          horizontal
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 20,
          }}
          renderItem={({item, index}) => (
            <CategoryCard title={item.title} icon={item.icon} active={true} />
          )}
          keyExtractor={item => item.id.toString()}
        />
        <DatePicker />
        {liveMatches.map(item => (
          <LeagueCard
            // country={item.Cnm}
            // league={item.Snm}
            // team1Name={item.Events[0]?.T1[0]?.Nm}
            // team2Name={item.Events[0]?.T2[0]?.Nm}
            // team1Image={item.Events[0]?.T1[0]?.Img}
            // team2Image={item.Events[0]?.T2[0]?.Img}
            // team1Goals={item.Events[0]?.Tr1}
            // team2Goals={item.Events[0]?.Tr2}
            // timeStamp={item.Events[0]?.Eps}
          />
        ))}
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
});

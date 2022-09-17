import {StyleSheet, Dimensions, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import moment from 'moment/moment';
import {useState} from 'react';

const {width, height} = Dimensions.get('screen');

const DatePicker = () => {
  const [todaysDate, setTodaysDate] = useState(
    moment(new Date()).format('YYYYMMDD'),
  );

  // console.log(todaysDate);

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

  return (
    <View style={styles.container}>
      <View style={styles.dateRow}>
        <TouchableOpacity style={styles.liveBox}>
          <Text style={styles.text}>LIVE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateBox}>
          <Text style={styles.text}>{day2Befor[0].toString()}</Text>
          <Text style={styles.subText}>{day2Befor[1].trim()}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateBox}>
          <Text style={styles.text}>{day1Befor[0]}</Text>
          <Text style={styles.subText}>{day1Befor[1].trim()}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.todayBox}>
          <Text style={styles.todayText}>TODAY</Text>
          <Text style={styles.todaySubText}>{today[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateBox}>
          <Text style={styles.text}>{day1[0]}</Text>
          <Text style={styles.subText}>{day1[1].trim()}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateBox}>
          <Text style={styles.text}>{day2[0]}</Text>
          <Text style={styles.subText}>{day2[1].trim()}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateBox}>
          <Text style={styles.text}>{day3[0]}</Text>
          <Text style={styles.subText}>{day3[1].trim()}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 10,
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
    color: 'orange',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  todayText: {
    color: 'orange',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

import {StyleSheet, Dimensions, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import { useState } from 'react';

const {width, height} = Dimensions.get('screen');

const DatePicker = ({
  today,
  day1,
  day1Text,
  day2,
  day2Text,
  day3,
  day3Text,
  day1Befor,
  day1BeforText,
  day2BeforText,
  day2Befor,
  onPressDay2Befor,
  onPressDay1Befor,
  onPressToday,
  onPressDay1,
  onPressDay2,
  onPressDay3,
  onPressLive
}) => {
  const [changeColors, setChangeColors] = useState()
  return (
    <View style={styles.container}>
      <View style={styles.dateRow}>
        <TouchableOpacity style={styles.liveBox} onPress={onPressLive}>
          <Text style={styles.text}>LIVE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateBox} onPress={onPressDay2Befor}>
          <Text style={styles.text}>{day2BeforText}</Text>
          <Text style={styles.subText}>{day2Befor}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateBox} onPress={onPressDay1Befor}>
          <Text style={styles.text}>{day1BeforText}</Text>
          <Text style={styles.subText}>{day1Befor}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.todayBox} onPress={onPressToday}>
          <Text style={styles.todayText}>TODAY</Text>
          <Text style={styles.todaySubText}>{today}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateBox} onPress={onPressDay1}>
          <Text style={styles.text}>{day1Text}</Text>
          <Text style={styles.subText}>{day1}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateBox} onPress={onPressDay2}>
          <Text style={styles.text}>{day2Text}</Text>
          <Text style={styles.subText}>{day2}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateBox} onPress={onPressDay3}>
          <Text style={styles.text}>{day3Text}</Text>
          <Text style={styles.subText}>{day3}</Text>
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

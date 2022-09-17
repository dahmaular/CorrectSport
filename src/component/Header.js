import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SearchIcon from '../assets/svg/Search.svg';

const {width} = Dimensions.get('screen');
const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerMenu}>
        <TouchableOpacity style={{flex:1}}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        <View style={styles.search}>
            <SearchIcon />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width,
    height: 60,
    backgroundColor: '',
  },
  headerMenu: {
    flexDirection: 'row',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight:'bold',
    color: '#ffffff'
  },
  search: {
    marginHorizontal: 20
  }
});

import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SearchIcon from '../assets/svg/Search.svg';
import logo from '../assets/image/logowhite.png';

const {width, height} = Dimensions.get('screen');
const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerMenu}>
        <TouchableOpacity style={{flex: 1}}>
          <Image source={logo} style={{width: width / 6.5, height: 60}} />
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
    height: height / 10,
    backgroundColor: '',
  },
  headerMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  search: {
    marginHorizontal: 20,
  },
});

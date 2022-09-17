import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen')

const CategoryCard = ({icon, title, active}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{...styles.card,
            backgroundColor: '#F4A58A'
          }}>
            <View style={styles.icon}>
                {icon}
            </View>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width,
  },
  card: {
    width: 100,
    height: 120,
    borderRadius: 16,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:3,
  },
  icon: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
  }
});

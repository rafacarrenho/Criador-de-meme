import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ImageMimimi from '../../images/mimimi.jpg';

const ImageWithText = ({firstText, secondText}) => {
  return (
    <View style={styles.area}>
      <Text style={[styles.title, styles.firstText]}>{firstText}</Text>
      <Image style={styles.image} source={ImageMimimi} />
      <Text style={[styles.title, styles.secondText]}>{secondText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'white',
  },
  area: {
    width: 300,
    height: 300,
    marginTop: 10,
    position: 'relative',
  },
  image: {
    width: 300,
    height: 300,
  },
  firstText: {
    position: 'absolute',
    zIndex: 99,
    width: '100%',
    top: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  secondText: {
    position: 'absolute',
    zIndex: 99,
    width: '100%',
    bottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default ImageWithText;

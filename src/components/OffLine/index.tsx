import React from 'react';
import { View, Text, Image } from 'react-native';
import {  Images, Languages } from '../../common';
import styles from './styles';

interface OfflineProps {}

const Offline: React.FC<OfflineProps> = () => {
    return (
      <View style={styles.container}>
        <Image
          source={Images.NoInternet}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.text} allowFontScaling={false}>{Languages.ConnectionError}</Text>
      </View>
    );
};

export default Offline;

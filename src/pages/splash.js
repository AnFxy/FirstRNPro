import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {STATUSBAR_HEIGHT} from '../js';

import Time from '../components/Time';
import Logo from '../components/Logo';
import Version from '../components/Version';

export default function Splash() {
  const navigation = useNavigation();

  const handleOnGoLogin = value => {
    // 跳转到第二个页面
    navigation.navigate('Login');
  };

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <LinearGradient colors={['#9797E3', '#FFFFFF']} style={styles.container}>
        <Time onGoLogin={handleOnGoLogin} />
        <View style={styles.divider} />
        <Logo />
        <Version />
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT,
    alignItems: 'center',
  },
  divider: {
    flex: 1,
  },
});

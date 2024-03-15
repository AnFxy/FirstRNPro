import React from 'react';
import LottieView from 'lottie-react-native';

export default function Logo() {
  return (
    <LottieView
      source={require('../assets/json/blue_fish.json')}
      style={{width: 300, height: 300}}
      autoPlay={true}
      loop={true}
    />
  );
}

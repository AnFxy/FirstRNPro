import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Time({onGoLogin}) {
  const [downTime, setDownTime] = useState(2);
  useEffect(() => {
    if (downTime <= 0) {
      onGoLogin();
      return;
    }
    const timer = setInterval(() => {
      setDownTime(downTime - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [downTime, onGoLogin]);
  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{downTime}s</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    paddingVertical: 4,
    width: 50,
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 6,
    marginRight: 20,
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
});

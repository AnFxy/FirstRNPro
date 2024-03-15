import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SystemConfig from '../module/SystemConfig';

export default function Version() {
  return (
    <View style={styles.versionContainer}>
      <Text style={styles.versionText}>V {SystemConfig.VersionName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  versionContainer: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 30,
    elevation: 2,
  },
  versionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9999FF',
  },
});

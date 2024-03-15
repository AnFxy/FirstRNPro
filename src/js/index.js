import {NativeModules, Platform, StatusBar} from 'react-native';

const {StatusBarManager} = NativeModules;
export const STATUSBAR_HEIGHT =
  Platform.OS === 'ios'
    ? StatusBarManager.HEIGHT
    : (StatusBarManager && StatusBarManager.HEIGHT) || StatusBar.currentHeight;

export function isAndroid() {
  return Platform.OS !== 'ios';
}

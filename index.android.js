/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  requireNativeComponent
} from 'react-native';

const LinearLayout = requireNativeComponent('RNLinearLayout', {
  name: 'LinearLayout',
  propTypes: {
    ...View.propTypes
  }
}, {
  nativeOnly: {
    nativeBackgroundAndroid: true,
    nativeForegroundAndroid: true
  }
})

export default class RNTest extends Component {
  render() {
    return (
      <LinearLayout style={{flex: 1}}>
        <Text>Linear Layout demo</Text>
        <Text>The below view should be arranged in a row</Text>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Text>Column 1 Column 2</Text>
        </View>
        <Text>But it is arranged in two different rows</Text>
      </LinearLayout>
    );
  }
}

AppRegistry.registerComponent('RNTest', () => RNTest);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, } from 'react-native';
import Navigation from './src/routerNavigation/navigation';
import { Provider } from '@ant-design/react-native';
export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <Navigation />
      </Provider>
    )
  }
}

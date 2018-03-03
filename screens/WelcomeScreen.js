import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Bismillah', color: '#03A9F4' },
  { text: 'Welcome to jobApp', color: '#009688' },
  { text: 'Set your location, then swipe away..', color: '#03A9F4' }
]

class WelcomeScreen extends Component {
  state = { token: null }

  async componentWillMount() {
    //AsyncStorage.removeItem('fb_token')
    let token = await AsyncStorage.getItem('fb_token')

    if(token) {
      this.props.navigation.navigate('map');

    } else {
      this.setState({ token:false });
    }
  }

  onSlidesComplete = () => {
      this.props.navigation.navigate('auth')
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />
    }

    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    )
  }
}

export default WelcomeScreen;

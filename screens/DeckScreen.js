import React, { Component } from 'react';
import { View, Text, Platform, Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';
import Swipe from '../components/Swipe';
import * as actions from '../actions';

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Jobs',
    tabBarIcon: ({ tintColor }) => {
         return <Icon name="description" size={30} color={tintColor} />;
      },
  }

  renderCard(job) {


    return (
      <Card title={job.jobtitle}>
        <View style={{ height: 300}}>
          <Text>
            I M A G E
          </Text>
          <Image
            style={{width: 66, height: 58}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
           />

        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
          <Text style={{height: 50}}>
            {job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
          </Text>
      </Card>
    )
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No more cards">
        <Button
          title="Back to Map"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03a9f4"
          onPress={() => this.props.navigation.navigate('map')}
        />
      </Card>
    )
  }

  render() {
    return (
      <View style={{ marginTop: 10}}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
          keyProp="jobkey"
        />
      </View>
    )
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}

function mapStateToProps({ jobs }) {
  return { jobs: jobs.results }
}

export default connect(mapStateToProps, actions)(DeckScreen);

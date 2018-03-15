import React, { Component } from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
  title: 'Review Jobs',
  tabBarIcon: ({ tintColor }) => {
       return <Icon name="favorite" size={30} color={tintColor} />;
    },
  headerRight: <Button
    title='Settings'
    onPress={() => navigation.navigate('settings')}
    backgroundColor="rgba(0,0,0,0)"
    color="rgba(0, 122, 255, 1)"
    />,
});

  renderLikedJobs() {
    return this.props.likedJobs.map(job => {
      const { company, formattedRelativeTime, url, jobtitle, jobkey } = job;

      return (
        <Card title={jobtitle} key={jobkey}>
          <View style={{ height: 200}}>
            <View style={{ height: 100}}>
              <Text>I M A G E</Text>
            </View>
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>{formattedRelativeTime}</Text>
            </View>
            <Button
              title="Apply Now!"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Card>
      )
    })
  }

  render() {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    )
  }
}

const styles = {
  italics: {
    fontStyle: 'italic'
  },
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

function mapStateToProps(state) {
  return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class FirstScreen extends Component {

constructor(props) {
  super(props);
}

  static navigationOptions = {
    title: 'Welcome',
};
  render() {

    return (
      <View style={styles.container}>
        <Text >Welcome to React Native!</Text>
        <Text >To get started, edit App.js</Text>

        <Button title="Press" style={styles.button}
                     onPress={() => this.props.navigation.navigate('Second')} color="blue" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    color: 'darkslateblue',

}
});

import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';

const light = 299792458; //Speed of lightKM per second

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: '10',
      percent: '14.10673',
      yearsatspeed: '9.9',
      count:1
    };
  }

  //shouldComponentUpdate()

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Time Dilation</Text>
        <TextInput
            style={{height: 60, borderColor: 'gray', borderWidth: 3, borderRadius:5, width: 140, padding:10, fontSize:30, fontWeight:'bold', textAlign:'center'}}
            onChangeText={(years) => this.setState({years})}
            keyboardType="numeric"
            value={this.state.years}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 240, padding:10, fontSize:24}}
            onChangeText={(percent) => this.setState({percent})}
            value={this.state.percent}
          />
        <Text style={styles.h2}>{(parseFloat(this.state.years) * Math.sqrt(1 - Math.pow(parseFloat(this.state.percent), 2)/Math.pow(light, 2))).toFixed(5)} Years.</Text>
        <Text style={{padding:10}}>Add number of years in first field, add in a percentage speed of light in the second, and get a result that is the number of years that would pass for the person going that speed.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize:42,
    fontWeight:'bold',
  },
  h2: {
    fontSize:28,
    fontWeight:'bold',
  }
});

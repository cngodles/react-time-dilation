import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';

const light = 299792458; //Speed of lightKM per second

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light: 100,
      years: '10',
      percent: '14.10673',
      yearsatspeed: '9.9000',
      count:1
    };
  }

  //shouldComponentUpdate()

  render() {
    let c2 = Math.pow(this.state.light, 2);
    let v2 = Math.pow(parseFloat(this.state.percent), 2);
    let squareme = 1-(v2/c2);
    let dilated = (parseFloat(this.state.years) * Math.sqrt(squareme));
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Time Dilation</Text>
        <TextInput
            style={{height: 60, borderColor: 'gray', borderWidth: 3, borderRadius:5, width: 140, padding:10, margin:5, fontSize:30, fontWeight:'bold', textAlign:'center'}}
            onChangeText={(years) => this.setState({years})}
            keyboardType="numeric"
            value={this.state.years}
          />
        <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200, padding:10, margin:5, fontSize:24}}
            onChangeText={(percent) => this.setState({percent})}
            value={this.state.percent}
          />
        <Text style={styles.h2}>In {dilated.toFixed(2)} year(s) for you, stationary person will have seen {this.state.years} year(s) pass.</Text>
        <Text style={{padding:20,fontSize:16}}>Directions: Add number of years in first field, add in a percentage speed of light in the second field.</Text>
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
    margin:20,
  },
  h2: {
    fontSize:18,
    fontWeight:'bold',
    padding:20,
  }
});

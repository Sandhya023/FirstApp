import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
class Tab3 extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text>Tab3</Text>
        </View>
     
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});

export default Tab3;
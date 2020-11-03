import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default class PlaceListScreen extends Component {

    state = {
        country: null,
        city: null,
        cities: []
    };

    changeCountry(item) {
        let city = null;
        let cities;
        switch (item.value) {
            case 'fr':
                cities = [
                    {label: 'Paris', value: 'paris'}
                ];
            break;
            case 'es':
                cities = [
                    {label: 'Madrid', value: 'madrid'}
                ];
            break;
        }

        this.setState({
            city,
            cities
        });
    }

    changeCity(item) {
        this.setState({
            city: item.value
        });
    }

    render(){
    return (
        <View>
     <DropDownPicker
                    items={[
                        {label: 'France', value: 'fr'},
                        {label: 'Spain', value: 'es'},
                    ]}
                    defaultNull
                    placeholder="Select your country"
                    containerStyle={{height: 40}}
                    onChangeItem={item => this.changeCountry(item)}
                />
                <DropDownPicker
                    items={this.state.cities}
                    defaultNull={this.state.city === null}
                    placeholder="Select your city"
                    containerStyle={{height: 40}}
                    onChangeItem={item => this.changeCity(item)}
                />
        </View>
    );
    }
};

PlaceListScreen.navigationOptions = {
    headerTitle: 'All Places'
}

const styles = StyleSheet.create({});

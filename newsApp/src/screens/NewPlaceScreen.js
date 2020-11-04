import React from 'react';


import {View, Text, StyleSheet, ScrollView, Button, TextInput} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const NewPlaceScreen = props => {
    return (
        <ScrollView>
        <View style={styles.form}>
            <Text style={styles.label}>
                Title
            </Text>
            <TextInput style={styles.textInput} />
            <Button title="Save Place" color={Colors.primary} 
            onPress={() => {}} />
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default NewPlaceScreen;
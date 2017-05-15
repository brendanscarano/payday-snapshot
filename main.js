import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './src/Container';

class App extends React.Component {
    render() {
        return (
            <Container />
        );
    }
}

Expo.registerRootComponent(App);

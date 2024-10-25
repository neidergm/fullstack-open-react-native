import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '@/constants/theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.backgroundColors.appBar,
        color: theme.colors.white,
    },
});

const AppBar = () => {
    return <View style={styles.container}>
        <AppBarTab label={"Repositories"}/>
    </View>;
};

export default AppBar;

import React from 'react';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';
import theme from '@/constants/theme';
import AppBar from '@/components/main/AppBar';
import RepositoryList from '@/components/main/RepositoryList';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColors.main,
  },
});

const Main = () => {
  return (
    <>
      <AppBar />
      <View style={styles.container}>
        <RepositoryList />
      </View>
    </>
  );
};

export default Main;

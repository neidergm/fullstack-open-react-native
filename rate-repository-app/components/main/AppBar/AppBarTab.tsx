import theme from '@/constants/theme';
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface AppBarTabProps {
    label: string;
}

const AppBarTab: React.FC<AppBarTabProps> = ({ label }) => {
    return (
        <TouchableOpacity style={styles.tab}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tab: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    text: {
        color: theme.colors.white,
        fontSize: 18,
        fontWeight: theme.fontWeights.bold as never,
    },
});

export default AppBarTab;
import React, { FC } from 'react';
import { Text as NativeText, StyleSheet, TextProps } from 'react-native';
import theme from '../../constants/theme';

type ThemedTextProps = TextProps & {
    color?: 'textPrimary' | 'textSecondary' | 'primary';
    fontSize?: 'body' | 'subheading';
    fontWeight?: 'normal' | 'bold';
}
const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal as never,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold as never,
    },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }: ThemedTextProps) => {
    const textStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        style,
    ];

    return <NativeText style={StyleSheet.flatten(textStyle)} {...props} />;
};

export default Text;
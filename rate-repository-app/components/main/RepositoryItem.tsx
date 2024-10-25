import React from 'react';
import { Image, StyleSheet, View, Text } from "react-native";
import theme from "../../constants/theme";

type RepositoryItemProps = {
    repository: any;
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: theme.colors.white,
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 5,
    },
    header: {
        gap: 20,
        flexDirection: 'row',
        marginBottom: 20,
    },
    headerTextContent:{
        gap: 5,
    },
    repositoryTitle: {
        fontWeight: theme.fontWeights.bold as never,
    },
    headerText: {
        justifyContent: 'space-between',
    },
    details:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    description: {
        color: theme.colors.textSecondary,
        
    },
    detailsText: {
        textAlign: 'center',
        color: theme.colors.textSecondary,
    },
    detailsValueText: {
        textAlign: 'center',
        fontWeight: theme.fontWeights.bold as never,
    },
    language: {
        backgroundColor: theme.colors.primary,
        padding: 5,
        borderRadius: 5,
        color: theme.colors.white,
        alignSelf: 'flex-start',
    },
});

const formatNumber = (number: number): string => {
    return number >= 1000 ? (number / 1000).toFixed(1) + 'k' : number.toString();
};

const RepositoryItem = ({ repository }: RepositoryItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.avatar}
                    source={{ uri: repository.ownerAvatarUrl }}
                />
                <View style={styles.headerTextContent}>
                    <Text style={styles.repositoryTitle}>{repository.fullName}</Text>
                    <Text style={styles.description}>{repository.description}</Text>
                    <Text style={styles.language}>{repository.language}</Text>
                </View>
            </View>
            <View style={styles.details}>
                <View>
                    <Text style={styles.detailsValueText}>{formatNumber(repository.stargazersCount)}</Text>
                    <Text style={styles.detailsText}>Stars</Text>
                </View>
                <View>
                    <Text style={styles.detailsValueText}>{formatNumber(repository.forksCount)}</Text>
                    <Text style={styles.detailsText}>Forks</Text>
                </View>
                <View>
                    <Text style={styles.detailsValueText}>{formatNumber(repository.reviewCount)}</Text>
                    <Text style={styles.detailsText}>Reviews</Text>
                </View>
                <View>
                    <Text style={styles.detailsValueText}>{formatNumber(repository.ratingAverage)}</Text>
                    <Text style={styles.detailsText}>Rating</Text>
                </View>
            </View>
        </View>
    );
}

export default RepositoryItem;
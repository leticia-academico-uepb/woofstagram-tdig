import { StyleSheet, Text } from 'react-native';

export default function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        color: '#69B898',
        fontWeight: '600',
        marginTop: 8,
    },
});

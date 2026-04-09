import { StyleSheet, Text } from 'react-native';

export default function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        color: '#058a24ff',
        fontWeight: '600',
        marginTop: 8,
    },
});

import { StyleSheet, Text } from 'react-native';

export default function Heading({ children }) {
    return <Text style={styles.heading}>{children}</Text>;
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },
});

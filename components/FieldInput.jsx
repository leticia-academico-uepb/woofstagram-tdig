import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function InputField({ label, placeholder, value, onChangeText, secureTextEntry = false }) {
    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.label}>{label}</Text>

            <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} />
        </View>
    );
}

const styles = StyleSheet.create({
    fieldContainer: {
        marginBottom: 15,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 8,
        padding: 10,
    },
});

import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function InputField({ label, placeholder, value, onChangeText, onBlur, secureTextEntry = false, keyboardType = 'default', maxLength, error = false, errorText = '' }) {
    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.label}>{label}</Text>

            <TextInput
                style={[styles.input, error && styles.inputError]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                maxLength={maxLength}
            />

            {error && errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
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
        fontSize: 16,
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        marginLeft: 5,
    },
});

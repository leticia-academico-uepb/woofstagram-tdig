import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import InputField from '../components/InputField';

export default function SignInScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <InputField label="E-mail" value={email} onChangeText={setEmail} />

            <InputField label="Senha" value={password} onChangeText={setPassword} secureTextEntry />

            <View style={styles.buttonSpacing}>
                <Button title="Entrar" onPress={() => navigation.navigate('Main')} />
            </View>

            <Button title="Criar conta" onPress={() => navigation.navigate('SignUp')} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    buttonSpacing: {
        marginBottom: 15,
    },
});

import { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, View } from 'react-native';
import InputField from '../components/InputField';

export default function SignInScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/images/woofstagram-logo2.png')} style={styles.image} resizeMode="contain" />

            <InputField label="E-mail" value={email} onChangeText={setEmail} />

            <InputField label="Senha" value={password} onChangeText={setPassword} secureTextEntry />

            <View style={styles.buttonSpacing}>
                <Button title="Entrar" onPress={() => navigation.navigate('Main')} color="#295C55" />
            </View>

            <Button title="Criar conta" onPress={() => navigation.navigate('SignUp')} color="#69B898" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        justifyContent: 'center',
        marginBottom: 40,
    },
    buttonSpacing: {
        marginTop: 10,
        marginBottom: 15,
    },
    image: {
        width: '80%',
        height: undefined,
        aspectRatio: 1,
        alignSelf: 'center',
        marginBottom: 40,
    },
});

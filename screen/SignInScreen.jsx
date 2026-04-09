import { useState } from 'react';
import { Alert, Button, Image, SafeAreaView, StyleSheet, View } from 'react-native';
import InputField from '../components/InputField';
import { getAllPets, setLoggedPet } from '../services/petsService';

export default function SignInScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Verificar se os campos estão preenchidos
        if (!email.trim() || !password.trim()) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }

        // Buscar todos os pets cadastrados
        const allPets = getAllPets();

        // Procurar um pet com o email correspondente
        const foundPet = allPets.find((pet) => pet.email === email);

        if (!foundPet) {
            Alert.alert('Erro', 'E-mail não encontrado!');
            return;
        }

        // Verificar se a senha está correta
        // Nota: Em um app real, você deve comparar a senha com hash
        // Aqui estamos comparando diretamente pois guardamos a senha no cadastro
        if (foundPet.password !== password) {
            Alert.alert('Erro', 'Senha incorreta!');
            return;
        }

        // Login bem sucedido - definir o pet como logado
        setLoggedPet(foundPet);

        Alert.alert('Sucesso', `Bem-vindo(a) ${foundPet.petName}!`);
        navigation.navigate('Main');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/images/woofstagram-logo2.png')} style={styles.image} resizeMode="contain" />

            <InputField label="E-mail" value={email} onChangeText={setEmail} />

            <InputField label="Senha" value={password} onChangeText={setPassword} secureTextEntry />

            <View style={styles.buttonSpacing}>
                <Button title="Entrar" onPress={handleLogin} color="#295C55" />
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

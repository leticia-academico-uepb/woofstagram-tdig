import InputField from '@/components/InputField';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [petName, setPetName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [breed, setBreed] = useState('');
    const [favoriteToy, setFavoriteToy] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <InputField label="E-mail" placeholder="Digite seu e-mail" value={email} onChangeText={setEmail} />

                <InputField label="Senha" placeholder="Digite sua senha" value={password} onChangeText={setPassword} secureTextEntry={true} />

                <InputField label="Confirmar Senha" placeholder="Digite novamente a senha" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={true} />

                <InputField label="Nome do Pet" placeholder="Digite o nome do pet" value={petName} onChangeText={setPetName} />

                <InputField label="Data de Aniversário" placeholder="Ex: 10/05/2020" value={birthday} onChangeText={setBirthday} />

                <InputField label="Raça" placeholder="Digite a raça" value={breed} onChangeText={setBreed} />

                <InputField label="Brinquedo Favorito" placeholder="Digite o brinquedo favorito" value={favoriteToy} onChangeText={setFavoriteToy} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

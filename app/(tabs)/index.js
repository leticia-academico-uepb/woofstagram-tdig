import InputField from '@/components/InputField';
import { Formik } from 'formik';
import React from 'react';
import { Alert, Button, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default function App() {
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        petName: '',
        birthday: '',
        breed: '',
        favoriteToy: '',
    };

    const handleSubmitForm = (values) => {
        if (values.password !== values.confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem!');
            return;
        }

        console.log('Dados do formulário:', values);
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
                {({ values, handleChange, handleSubmit }) => (
                    <ScrollView>
                        <InputField label="E-mail" placeholder="Digite seu e-mail" value={values.email} onChangeText={handleChange('email')} />

                        <InputField label="Senha" placeholder="Digite sua senha" value={values.password} onChangeText={handleChange('password')} secureTextEntry={true} />

                        <InputField label="Confirmar Senha" placeholder="Digite novamente" value={values.confirmPassword} onChangeText={handleChange('confirmPassword')} secureTextEntry={true} />

                        <InputField label="Nome do Pet" placeholder="Digite o nome" value={values.petName} onChangeText={handleChange('petName')} />

                        <InputField label="Data de Aniversário" placeholder="Ex: 10/05/2020" value={values.birthday} onChangeText={handleChange('birthday')} />

                        <InputField label="Raça" placeholder="Digite a raça" value={values.breed} onChangeText={handleChange('breed')} />

                        <InputField label="Brinquedo Favorito" placeholder="Digite o brinquedo" value={values.favoriteToy} onChangeText={handleChange('favoriteToy')} />

                        <Button title="Cadastrar" onPress={handleSubmit} />
                    </ScrollView>
                )}
            </Formik>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

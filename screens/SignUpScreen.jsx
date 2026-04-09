import { Formik } from 'formik';
import { Alert, Button, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import InputField from '../components/InputField';

export default function SignUpScreen({ navigation }) {
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

        Alert.alert('Sucesso', 'Cadastro realizado!');
        navigation.navigate('Main');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
                {({ values, handleChange, handleSubmit }) => (
                    <ScrollView contentContainerStyle={styles.form}>
                        <InputField label="E-mail" value={values.email} onChangeText={handleChange('email')} />

                        <InputField label="Senha" value={values.password} onChangeText={handleChange('password')} secureTextEntry />

                        <InputField label="Confirmar Senha" value={values.confirmPassword} onChangeText={handleChange('confirmPassword')} secureTextEntry />

                        <InputField label="Nome do Pet" value={values.petName} onChangeText={handleChange('petName')} />

                        <InputField label="Data" value={values.birthday} onChangeText={handleChange('birthday')} />

                        <InputField label="Raça" value={values.breed} onChangeText={handleChange('breed')} />

                        <InputField label="Brinquedo" value={values.favoriteToy} onChangeText={handleChange('favoriteToy')} />

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
    form: {
        paddingBottom: 30,
    },
});

import { Formik } from 'formik';
import { Alert, Button, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import InputField from '../components/InputField';

// Estrutura simples para armazenar os pets cadastrados
let petsDatabase = [];

// Schema de validação com Yup
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Digite um e-mail válido').required('E-mail é obrigatório'),
    password: Yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'As senhas não conferem')
        .required('Confirmação de senha é obrigatória'),
    petName: Yup.string().min(2, 'Nome do pet deve ter no mínimo 2 caracteres').required('Nome do pet é obrigatório'),
    birthday: Yup.string()
        .matches(/^\d{2}\/\d{2}\/\d{4}$/, 'Use o formato DD/MM/AAAA')
        .required('Data de nascimento é obrigatória'),
    breed: Yup.string().min(2, 'Raça deve ter no mínimo 2 caracteres').required('Raça é obrigatória'),
    favoriteToy: Yup.string().min(2, 'Brinquedo favorito deve ter no mínimo 2 caracteres').required('Brinquedo favorito é obrigatório'),
});

const handleDateChange = (text, setFieldValue) => {
    let cleaned = text.replace(/\D/g, '');

    if (cleaned.length <= 2) {
        cleaned = cleaned;
    } else if (cleaned.length <= 4) {
        cleaned = cleaned.slice(0, 2) + '/' + cleaned.slice(2);
    } else {
        cleaned = cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4) + '/' + cleaned.slice(4, 8);
    }

    setFieldValue('birthday', cleaned);
};

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

    const handleSubmitForm = async (values, { resetForm, setSubmitting }) => {
        try {
            const newPet = {
                id: Date.now(),
                email: values.email,
                petName: values.petName,
                birthday: values.birthday,
                breed: values.breed,
                favoriteToy: values.favoriteToy,
                registeredAt: new Date().toISOString(),
            };

            petsDatabase.push(newPet);

            console.log('Pets cadastrados:', petsDatabase);

            Alert.alert('Sucesso', `Pet ${values.petName} cadastrado com sucesso!`);
            resetForm();
            navigation.navigate('Main');
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o pet');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Formik initialValues={initialValues} onSubmit={handleSubmitForm} validationSchema={validationSchema} validateOnMount={false} validateOnChange={true} validateOnBlur={true}>
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue, isSubmitting }) => (
                    <ScrollView contentContainerStyle={styles.form}>
                        <InputField
                            label="E-mail"
                            placeholder="seu@email.com"
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            error={touched.email && errors.email}
                            errorText={errors.email}
                        />

                        <InputField
                            label="Senha"
                            placeholder="******"
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            secureTextEntry
                            error={touched.password && errors.password}
                            errorText={errors.password}
                        />

                        <InputField
                            label="Confirmar Senha"
                            placeholder="******"
                            value={values.confirmPassword}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            secureTextEntry
                            error={touched.confirmPassword && errors.confirmPassword}
                            errorText={errors.confirmPassword}
                        />

                        <InputField
                            label="Nome do Pet"
                            placeholder="Ex: Rex"
                            value={values.petName}
                            onChangeText={handleChange('petName')}
                            onBlur={handleBlur('petName')}
                            error={touched.petName && errors.petName}
                            errorText={errors.petName}
                        />

                        <InputField
                            label="Data de Nascimento"
                            placeholder="DD/MM/AAAA"
                            value={values.birthday}
                            onChangeText={(text) => handleDateChange(text, setFieldValue)}
                            onBlur={handleBlur('birthday')}
                            keyboardType="numeric"
                            maxLength={10}
                            error={touched.birthday && errors.birthday}
                            errorText={errors.birthday}
                        />

                        <InputField
                            label="Raça"
                            placeholder="Ex: Labrador"
                            value={values.breed}
                            onChangeText={handleChange('breed')}
                            onBlur={handleBlur('breed')}
                            error={touched.breed && errors.breed}
                            errorText={errors.breed}
                        />

                        <InputField
                            label="Brinquedo Favorito"
                            placeholder="Ex: Bolinha"
                            value={values.favoriteToy}
                            onChangeText={handleChange('favoriteToy')}
                            onBlur={handleBlur('favoriteToy')}
                            error={touched.favoriteToy && errors.favoriteToy}
                            errorText={errors.favoriteToy}
                        />

                        <Button title={isSubmitting ? 'Cadastrando...' : 'Cadastrar'} onPress={handleSubmit} color="#69B898" disabled={isSubmitting} />
                    </ScrollView>
                )}
            </Formik>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
    },
    form: {
        paddingTop: 40,
        paddingBottom: 30,
    },
});

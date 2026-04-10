import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Heading from '../components/Heading';
import Title from '../components/Title';
import { getLoggedPet } from '../services/petsService';

export default function AccountScreen() {
    // Pega o pet que está logado
    const loggedPet = getLoggedPet();

    if (!loggedPet) {
        return (
            <SafeAreaView style={styles.container}>
                <Heading>Pet Profile</Heading>
                <View style={styles.profileCard}>
                    <Text>Nenhum pet logado</Text>
                    <Text>Faça o cadastro de um pet</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Heading>Pet Profile</Heading>

            <View style={styles.profileCard}>
                <Image source={require('../assets/images/photo-icon.png')} style={styles.image} resizeMode="contain" />

                <Title>{loggedPet.petName}</Title>

                <Text>Raça: {loggedPet.breed}</Text>
                <Text>Brinquedo favorito: {loggedPet.favoriteToy}</Text>
                <Text>Aniversário: {loggedPet.birthday}</Text>
                <Text>E-mail: {loggedPet.email}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    profileCard: {
        alignItems: 'center',
        padding: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 40,
        marginBottom: 15,
    },
});

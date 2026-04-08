import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Avatar from '../components/Avatar';
import Heading from '../components/Heading';
import Title from '../components/Title';

export default function AccountScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Heading>Pet Profile</Heading>

            <View style={styles.profileCard}>
                <Avatar source={{ uri: 'https://placedog.net/200/200?id=50' }} size={100} />

                <Title>Rex</Title>

                <Text>Raça: Labrador</Text>
                <Text>Brinquedo favorito: Bola</Text>
                <Text>Aniversário: 10/05/2020</Text>
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
});

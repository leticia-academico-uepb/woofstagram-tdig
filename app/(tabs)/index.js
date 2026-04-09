import Avatar from '@/components/Avatar';
import Heading from '@/components/Heading';
import Title from '@/components/Title';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const trendingPets = [
        { id: 1, name: 'Rex', avatar: 'https://placedog.net/200/200?id=1' },
        { id: 2, name: 'Luna', avatar: 'https://placedog.net/200/200?id=2' },
        { id: 3, name: 'Thor', avatar: 'https://placedog.net/200/200?id=3' },
    ];

    const articles = [
        { id: 1, title: 'Como escolher brinquedos para cães' },
        { id: 2, title: '5 dicas para alimentação saudável' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Heading>Trending Woofs</Heading>

                {/*
                <Link href="/register" asChild>
                    <Pressable style={styles.registerButton}>
                        <Text style={styles.registerText}>Cadastrar Pet</Text>
                    </Pressable>
                </Link>
                */}

                <View style={styles.petList}>
                    {trendingPets.map((pet) => (
                        <View key={pet.id} style={styles.petCard}>
                            <Avatar source={{ uri: pet.avatar }} size={80} />
                            <Title>{pet.name}</Title>
                        </View>
                    ))}
                </View>
                <Heading>New Posts</Heading>
                {articles.map((article) => (
                    <View key={article.id} style={styles.articleCard}>
                        <Title>{article.title}</Title>
                        <Text style={styles.articleText}>Confira conteúdo exclusivo sobre pets e cuidados.</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    registerButton: {
        backgroundColor: '#6d28d9',
        padding: 12,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    registerText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    petList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    petCard: {
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        width: '30%',
    },
    articleCard: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        marginBottom: 15,
    },
    articleText: {
        marginTop: 5,
        color: '#666',
    },
});

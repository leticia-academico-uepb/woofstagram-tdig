import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Heading from '../components/Heading';
import WoofPost from '../components/WoofPost';

export default function FeedScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Heading>Latest Posts</Heading>

                {POSTS.map((post) => (
                    <WoofPost key={post.id} image={post.image} title={post.title} description={post.description} />
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
});

const POSTS = [
    {
        id: 1,
        image: 'https://placedog.net/300/200?id=20',
        title: 'Passeios mais saudáveis',
        description: 'Melhore a rotina diária do seu pet.',
    },
    {
        id: 2,
        image: 'https://placedog.net/300/200?id=21',
        title: 'Treinamento básico',
        description: 'Comandos simples para seu cachorro aprender rápido.',
    },
];

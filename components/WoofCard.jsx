import Avatar from '@/components/Avatar';
import Title from '@/components/Title';
import { StyleSheet, View } from 'react-native';

export default function WoofCard({ name, avatar }) {
    return (
        <View style={styles.card}>
            <Avatar source={{ uri: avatar }} size={80} />
            <Title>{name}</Title>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 14,
        padding: 15,
        alignItems: 'center',
        width: 110,
        marginRight: 15,
    },
});

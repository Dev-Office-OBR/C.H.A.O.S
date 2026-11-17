import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Menu } from '../components/barra-lateral';
import { colors } from '../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.branco,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
});

export default function Home() {
    return (
        <View style={styles.container}>
            <Menu />

            <View
                style={styles.content}
            >
                <Text>Lista de Clientes</Text>

            </View>
            <StatusBar hidden={true} />
        </View>
    );
}
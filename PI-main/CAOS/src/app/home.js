import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { Menu } from '../components/barra-lateral';
import { colors } from '../styles/colors';
import Databs from '../components/Dashbordprincipal/databs';

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.branco,
    },
    content: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default function Home() {
    return (
        <View style={styles.container}>
            <Menu />
            <View style={styles.content}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    marginBottom: 50,
                    marginTop: 50
                }}>Dashboard Principal</Text>
                <Databs />
            </View>
            <StatusBar hidden={true} />
        </View>
    );
}
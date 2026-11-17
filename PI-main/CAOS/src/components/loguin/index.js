import { TouchableOpacity, Image, Text, View } from "react-native";
import { styles } from './styles';
import { Link } from 'expo-router';

export function Button() {

    return (
        <TouchableOpacity
            style={styles.Button}>
            <Link href="/home">
                <Image
                    style={styles.ButtonImage}
                    source={require("../../../assets/StartSystem.png")}
                />
            </Link>
        </TouchableOpacity>
    )
};

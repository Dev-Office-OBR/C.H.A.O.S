import { TouchableOpacity, Image } from "react-native";
import { styles } from './styles';

export function Block({ img, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image
                style={styles.Block}
                source={require("../../../assets/Unlock.png")}
            />
        </TouchableOpacity>
    );
}
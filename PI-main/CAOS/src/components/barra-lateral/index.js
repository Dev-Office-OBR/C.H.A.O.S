import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { Link } from "expo-router";

export function Menu() {
    return (
        <View
            style={styles.background}
        >
            <View>
                <Link
                    href=""
                    style={styles.menu}
                >
                    <Image
                        source={require("../../../assets/BarraLatera/Menu.png")}
                    />
                </Link>
            </View>

            <View>
                <Link
                    href="/home"
                    style={styles.home}
                >
                    <Image
                        source={require("../../../assets/BarraLatera/Home.png")}
                    />
                </Link>
            </View>

            <View>
                <Link
                    href="/table"
                    style={styles.table}
                >
                    <Image
                        source={require("../../../assets/BarraLatera/Table.png")}
                    />
                </Link>
            </View>

            <View>
                <Link
                    href="/users"
                    style={styles.users}
                >
                    <Image
                        source={require("../../../assets/BarraLatera/Users.png")}
                    />
                </Link>
            </View>

            <View>
                <Link
                    href="/Loguin"
                    style={styles.userx}
                >
                    <Image
                        source={require("../../../assets/BarraLatera/User-x.png")}
                    />
                </Link>
            </View>
        </View>
    )
};
import {Image, StyleSheet, View} from "react-native";
import colors from "../design/colors";
export default function Header() {
    return (
        <View style={style.container}>
            <Image source={require("../assets/logo.png")}></Image>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 200,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.gray_330
    }
})
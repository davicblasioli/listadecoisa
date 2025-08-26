import {Text, StyleSheet, Image, View} from "react-native";
import colors from "../design/colors";

export default function EmptyList() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/prancheta.png')} />
            <Text style={styles.titulo}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.subtitulo}>Crie tarefas e organize seus iens a fazer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
        marginHorizontal: 20,
    },
    titulo: {
        fontSize: 20,
        color: colors.gray_500,
        fontWeight: 'bold',
        marginTop: 30
    },
    subtitulo: {
        color: colors.gray_500,
        fontSize: 18,
    }
})
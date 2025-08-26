import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import Header from "../components/Header";
import FormCadastro from "../components/FormCadastro";
import BtnCont from "../components/BtnCont";
import colors from "../design/colors";
import Search from "../components/Search";
import EmptyList from "../components/EmptyList";
import Card from "../components/Card";

export default function HomeScreen() {
    const [lista, setLista] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")
    const [busca, setBusca] = useState("")

    function cadastrarTarefa() {
        let aux =  [
            ...lista,
            {
                tarefa: novaTarefa,
                concluido: false
            }
        ]
        setLista(aux)
        setNovaTarefa("")
        console.log(aux)
    }

    function numTarefasConcluidas() {
        let concluidas = lista.filter(tarefa => tarefa.concluido)
        return concluidas.length
    }

    function numTarefasAtivas() {
        let ativas = lista.filter(tarefa => !tarefa.concluido)
        return ativas.length
    }

    function concluirTarefa(index) {
        let aux = [...lista]
        aux[index].concluido = !aux[index].concluido
        setLista(aux)
    }


    function excluirTarefa(index) {
        // Remove o item da lista pelo índice
        let aux = [...lista]
        aux.splice(index, 1)
        setLista(aux)
    }


    return (
        <ScrollView>
            <Header />
            <FormCadastro fnCadastrar={cadastrarTarefa} texto={novaTarefa} setTexto={setNovaTarefa} />

            <View style={styles.botoes}>
                <BtnCont text={"Tarefas Criadas"} num={numTarefasAtivas()} />
                <BtnCont text={"Concluídas"} num={numTarefasConcluidas()} isGreen={true}/>
            </View>
            <Search texto={busca} setTexto={setBusca} />

            {lista.length === 0 && <EmptyList />}

            {lista
                .sort((a, b) => a.concluido - b.concluido)
                .map((item, index) => {
                    if (item.tarefa.toLowerCase().includes(busca.toLowerCase())) {
                        return (
                            <Card
                                key={index}
                                texto={item.tarefa}
                                concluido={item.concluido}
                                fnConcluir={() => concluirTarefa(index)}
                                fnExcluir={() => excluirTarefa(index)}
                            />
                        )
                    }
                    return null
            })}



        </ScrollView>
    )
}

const styles = StyleSheet.create({
    botoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray_200,
        paddingBottom: 20
    }
})
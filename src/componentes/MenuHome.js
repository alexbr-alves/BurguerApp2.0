import React from "react";
import { Text, Image, ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";


import Menu from "../mocks/menu";

export default function MenuHome() {
    const navigation = useNavigation();
    const route = useRoute();
    return  <ScrollView>
            {Menu.lista.map(({nome, imagem}) => {
                return<TouchableOpacity key={nome} onPress={(function() 
                    {if (nome) {navigation.navigate(nome)}})} >
                        <View style={estilos.fundo}>
                        <Text style={estilos.nome}>{nome}</Text>
                        <Image style={estilos.imagem} source={imagem}></Image>
                        </View>
                        </ TouchableOpacity>
            })}
            </ScrollView>
}



const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#00ced1",
       borderRadius: 5,
       height: 170,
       marginHorizontal: 10,
       marginTop: 15,
       paddingHorizontal: 10, 

    },
    nome: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    imagem: {
        width: 150,
        height: 150,  
        borderRadius: 15,
        marginLeft: 110
    },
})
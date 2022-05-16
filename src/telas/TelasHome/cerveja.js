import React from "react";
import { Text, Image, ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";

import CervejaMocks from '../../mocks/cerveja'

export default function SucoCardapio() {
    return <ScrollView  style={{backgroundColor: '#afeeee'}}>
    {CervejaMocks.lista.map(({nome, imagem, descricao, preco}) => {
        return<TouchableOpacity key={nome}> 
        <View  style={estilos.fundo}>
        <Text style={estilos.nome}>{nome}</Text>
        <View style={{flexDirection: 'row'}}>
        <Image style={estilos.imagem} source={imagem}></Image>
        <View style={{flexDirection: 'column'}}>
        <Text style={estilos.descricao} >{descricao}</Text>  
        <Text style={estilos.preco}>{preco}</Text>  
        
        </View>
        </View>
        </View>
        </TouchableOpacity>
    })}
    </ScrollView>
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "#00ced1",
       borderRadius: 5,
       height: 160,
       marginHorizontal: 10,
       marginTop: 15,
       paddingHorizontal: 10, 

    },
    nome: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    imagem: {
        width: 130,
        height: 130,  
        borderRadius: 15,
    },
    descricao: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 110,
        textAlign: 'left'
    },
    preco: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: 'red'
    }
})
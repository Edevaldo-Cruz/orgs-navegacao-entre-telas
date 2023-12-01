import React from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";

import Texto from "./Texto";

import topo from "../assets/topo.png";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const largura = Dimensions.get("screen").width;
const ALTURA_PADRAO = 270;

export default function Topo({
  titulo,
  imagem = topo,
  altura = ALTURA_PADRAO,
}) {
  const navigation = useNavigation();
  const estilos = funcaoEstilos(altura);
  return (
    <>
      <Image source={imagem} style={estilos.topo} />
      <View style={estilos.gradiente} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={estilos.botaoVoltar}
      >
        {/* Ícone de seta para voltar */}
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
    </>
  );
}

const funcaoEstilos = (altura) =>
  StyleSheet.create({
    topo: {
      width: "100%",
      height: altura,
    },
    gradiente: {
      position: "absolute",
      backgroundColor: "rgba(0, 0, 0, 0.3)", // Cor preta com 30% de opacidade
      width: "100%",
      height: (130 / 360) * largura,
    },
    titulo: {
      width: "100%",
      position: "absolute",
      textAlign: "center",
      fontSize: 16,
      lineHeight: 26,
      color: "white",
      fontWeight: "bold",
      padding: 16,
    },
    botaoVoltar: {
      position: "absolute",
      padding: 17,
    },
    voltar: {
      width: 24,
      height: 24,
    },
  });

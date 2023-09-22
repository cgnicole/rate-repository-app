import React from "react";
import { NativeRouter } from "react-router-native";
import Hola from "./src/componets/Hola";

export default function App() {
  return (
    <NativeRouter>
      <Hola />
    </NativeRouter>
  );
}

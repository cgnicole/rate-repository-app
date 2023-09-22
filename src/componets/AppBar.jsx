import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";
import Constants from "expo-constants";
import { Link, useLocation } from "react-router-native"; // Importa useLocation

const AppBarTap = ({ children, to }) => {
  const location = useLocation(); // Obtiene la ruta actual
  const isActive = location.pathname === to; // Comprueba si la ruta actual coincide con 'to'

  const textStyles = [styles.text, isActive && styles.active];

  return (
    <Link to={to} component={TouchableOpacity}>
      <StyledText fontWeight="bold" style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scroll}>
        <AppBarTap active to="/">
          Repositories
        </AppBarTap>
        <AppBarTap to="/signin">Sign in</AppBarTap>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#40c563",
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    flexDirection: "row",
  },

  text: {
    color: "#333",
    paddingHorizontal: 10,
    fontSize: 18,
  },

  scroll: {
    padding: 20,
    fontSize: 20,
  },

  active: {
    color: "purple", // Cambia el color del texto cuando está activo a morado
  },
});

export default AppBar;

import React from "react";
import { Image, View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

// Mapa de colores para lenguajes específicos
const languageColors = {
  HTML: "orange",
  TypeScript: "yellow",
  Ruby: "#dc2f02", // Color real de Ruby
  Python: "#99c2ff",
};

const RepositoryItemHeader = (props) => {
  const languageColor = languageColors[props.language] || theme.colors.primary;

  const textColor = languageColor === "black" ? "white" : "black";

  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontSize="subheading" fontWeight="bold" color={textColor}>
          {props.fullName}
        </StyledText>
        <StyledText color="secondary">{props.description}</StyledText>
        <StyledText
          style={[
            styles.language,
            {
              backgroundColor: languageColor,
              color: textColor,
              fontWeight: "bold",
            },
          ]}
        >
          {props.language}
        </StyledText>
      </View>
    </View>
  );
};

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
};

export default RepositoryItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  language: {
    padding: 4,
    alignSelf: "flex-start",
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 4,
    marginBottom: 4,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

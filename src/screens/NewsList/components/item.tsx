import { AppRoutes } from "@navigation/app.router";
import { navigate } from "@navigation/UNavigation";
import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { IItemProps } from "../interface";
import { styles } from "./styles";

const Item: FC<IItemProps> = ({ item }) => {
  const handleNavigate = () => {
    navigate(AppRoutes.DETAIL, { url: item.link });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.published}</Text>
    </TouchableOpacity>
  );
};

export default Item;

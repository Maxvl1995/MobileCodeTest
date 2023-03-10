import { Text } from "@components/atoms";
import { AppRoutes } from "@navigation/app.router";
import { navigate } from "@navigation/UNavigation";
import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import { IItemProps } from "../interface";
import { styles } from "./styles";

const Item: FC<IItemProps> = ({ item }) => {
  const handleNavigate = () => {
    console.log(item.link, "11");
    navigate(AppRoutes.DETAIL, { url: item.link });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.description}</Text>
      <Text>{item.published}</Text>
    </TouchableOpacity>
  );
};

export default Item;

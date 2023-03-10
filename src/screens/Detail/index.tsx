import { View, Text } from "react-native";
import React, { FC } from "react";
import { IPropsDetail } from "./interface";
import { styles } from "./styles";
import WebView from "react-native-webview";

const Detail: FC<IPropsDetail> = ({ url }) => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: url }} />
    </View>
  );
};

export default Detail;

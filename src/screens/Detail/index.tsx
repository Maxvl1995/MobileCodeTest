import React, { FC } from "react";
import { View } from "react-native";
import WebView from "react-native-webview";
import { styles } from "./styles";

const Detail: FC = (props) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: props.route.params.url,
        }}
      />
    </View>
  );
};

export default Detail;

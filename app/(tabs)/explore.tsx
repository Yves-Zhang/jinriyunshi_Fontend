import WebView from 'react-native-webview';
import { StyleSheet } from "react-native";

export default function TabTwoScreen() {
  return (
    <WebView
      source={{ uri: 'http://192.168.1.100:3210/' }}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

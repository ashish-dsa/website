import {AppRegistry, Platform} from "react-native";
import App from "./src/App";

AppRegistry.registerComponent("website", () => App);
if (Platform.OS === "web") {
  AppRegistry.runApplication("website", {
    rootTag: document.getElementById("root"),
  });
}

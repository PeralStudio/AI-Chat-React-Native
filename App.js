import { StatusBar } from "expo-status-bar";
import Home from "./src/components/Home";
import "react-native-url-polyfill/auto";
import * as NavigationBar from "expo-navigation-bar";

export default function App() {
    NavigationBar.setBackgroundColorAsync("#333541");
    NavigationBar.setButtonStyleAsync("dark");

    return (
        <>
            <StatusBar style="dark" translucent={true} backgroundColor="transparent" />
            <Home />
        </>
    );
}

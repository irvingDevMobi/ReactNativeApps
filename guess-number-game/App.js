import {ImageBackground, StyleSheet} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState();

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber)
    }

    let screen = <StartGameScreen
        onPickNumber={pickedNumberHandler}/>;
    if (userNumber) {
        screen = <GameScreen/>;
    }

    return (
        <LinearGradient style={styles.rootScreen} colors={["#f82904", "#d5d535"]}>
            <ImageBackground
                source={require('./assets/images/background.png')}
                resizeMode={"cover"}
                style={styles.rootScreen}
                imageStyle={styles.backgroundImageStyle}
            >
                {screen}
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    backgroundImageStyle: {
        opacity: 0.15,
    }
});

import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [gameIsOver, setGameIsOver] = useState(true);
	const [guessRounds, setGuessRounds] = useState(0);

	const [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
		setGameIsOver(false);
	}

	function gameOverHandler() {
		setGameIsOver(true);
	}

	function startNewGameHandler() {
		setUserNumber(null);
		setGuessRounds(0);
	}

	let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
	}

	if (gameIsOver && userNumber) {
		screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />;
	}

	return (
		<LinearGradient
			colors={[Colors.primary500, Colors.accent500]}
			style={styles.rootScreen}
		>
			<ImageBackground
				source={require('./assets/images/background.png')}
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.3,
	},
});

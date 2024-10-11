import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />
  }

	return (
		<LinearGradient
			colors={['#4e0329', '#ddb52f']}
			style={styles.rootScreen}
		>
			<ImageBackground
				source={require('./assets/background.png')}
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
		backgroundColor: '#ddb52f',
		flex: 1,
  },
  backgroundImage: {
    opacity: 0.3
  },
});

import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

function GameOverScreen() {
	return (
		<View style={styles.rootContainer}>
			<Title>GAME OVER!</Title>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <View>
                <Text>Your Phone needed X Round(s) to Guess the Number Y.</Text>
            </View>
		</View>
	);
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 4,
		borderColor: Colors.primary800,
		overflow: 'hidden',
		margin: 36,
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

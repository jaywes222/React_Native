import { Pressable, StyleSheet, Text, View } from 'react-native';

function PrimaryButton({ children, onPress }) {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				onPress={onPress}
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnerContainer, styles.pressed]
						: styles.buttonInnerContainer
				}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: 'hidden',
	},
	buttonInnerContainer: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		backgroundColor: '#72063c',
		elevation: 2, // Android
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
	},
	pressed: {
		opacity: 0.75,
	},
});

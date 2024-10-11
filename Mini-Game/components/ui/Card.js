import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

function Card({children}) {
    return <View style={styles.card}>{children}</View>
};

export default Card;

const styles = StyleSheet.create({
	card: {
		padding: 16,
		marginTop: 100,
		marginHorizontal: 24,
		borderRadius: 8,
		backgroundColor: Colors.primary800,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 4, // Android
		//iOS
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.5,
	},
});
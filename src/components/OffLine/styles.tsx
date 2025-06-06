
import { StyleSheet } from 'react-native';
import { AppStyles, Colors, Constants } from '../../common';

export default StyleSheet.create({
    container: {
        backgroundColor:Colors.White,
        flex: 1,
        ...AppStyles.centerView
      },
      image: {
        width: '70%',
        height: '15%',
      },
      text: {
        color:Colors.gray,
        marginBottom: 7,
        fontFamily: Constants.fontFamilySemiBold,
        textAlign: 'center',
        ...AppStyles.fontSize12
      },
})
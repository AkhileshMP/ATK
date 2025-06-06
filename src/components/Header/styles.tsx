
import { StyleSheet } from 'react-native';
import { AppStyles, Colors, Constants } from '../../common';

export default StyleSheet.create({
    header: {
        ...AppStyles.rowView,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: Colors.White,
        //borderBottomWidth: 1,
        ...AppStyles.ShadowView
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.White,
        ...AppStyles.centerView,
    },
    headerTitle: {
        ...AppStyles.fontSize14,
        fontFamily: Constants.fontFamilySemiBold,
        color: Colors.black,
        marginLeft: 16,
    }
});

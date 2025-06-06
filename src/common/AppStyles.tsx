import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from './Colors';

const AppStyles = StyleSheet.create({
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    centerView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightView: {
        position: 'absolute',
        right: 0,
    },
    ShadowView: {
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    fontSize8: {
        fontSize: RFValue(8),
    },
    fontSize9: {
        fontSize: RFValue(9),
    },
    fontSize10: {
        fontSize: RFValue(10),
    },
    fontSize11: {
        fontSize: RFValue(11),
    },
    fontSize12: {
        fontSize: RFValue(12),
    },
    fontSize13: {
        fontSize: RFValue(13),
    },
    fontSize14: {
        fontSize: RFValue(14),
    },
    fontSize15: {
        fontSize: RFValue(15),
    },
    fontSize16: {
        fontSize: RFValue(16),
    },
    fontSize17: {
        fontSize: RFValue(17),
    },
    fontSize18: {
        fontSize: RFValue(18),
    },
    mainLoader: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: Colors.loaderBackground,
    },

});

export default AppStyles;

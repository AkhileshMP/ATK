import * as React from 'react';
import { TouchableOpacity, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { Icons } from '../../common';

interface HeaderProps {
    title: String;
    goBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ goBack, title }) => {
    return (
        <View style={[styles.header]}>
            {/* <TouchableOpacity
            style={styles.backButton}
            onPress={() => {}}
            >
            <Ionicons name={Icons.Ionicons.back} size={24} color="#333" />
            </TouchableOpacity> */}
            <Text style={styles.headerTitle} allowFontScaling={false}>{title}</Text>
        </View>
    );
};

export default Header;

import * as React from "react";
import { NavigationProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/core';
import { Home } from '../containers'

interface HomeScreenProps {
    navigation: NavigationProp<ParamListBase>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
    return(
        <Home
        navigation={navigation}
        goBack={()=> navigation.goBack()}
        />
    )
}

export default HomeScreen;
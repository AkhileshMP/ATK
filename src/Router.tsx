import * as React from "react";
import { useEffect, useCallback, useState } from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import Toast from "react-native-simple-toast";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import Navigation from "./navigation";
import { Colors, Languages } from "./common";
import { actions } from "./redux/UserRedux";
import { Offline } from "./components";

interface RootState {
  user: {
    isConnected: boolean;
  };
}

const Router: React.FC = () => {
  const dispatch = useDispatch();
  
  const isConnected = useSelector<RootState, boolean>((state) => state.user.isConnected);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      updateNetwork(state.isConnected ?? false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  
  useEffect(() => {
    onCheckNetwork();
  }, [isConnected]);
  
  const setNetwork = useCallback((value: boolean) => {
    dispatch(actions.setNetwork(value));
  }, [dispatch]);

  const updateNetwork = (isConnected: boolean) => {
    setNetwork(isConnected);
  };

  const onCheckNetwork = () => {
    if (!isConnected) {
      toast(Languages.OfflineMsg);
    }
  };
  
  const toast = (message: string) => {
    Toast.show(message, 6);
  };

  if (!isConnected) {
    return <Offline />;
  }
  
  return (
    <SafeAreaProvider style={{backgroundColor: Colors.White}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.White}
        animated
        hidden={false} />
        <SafeAreaView style={{flex: 1}}>
          <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Router;
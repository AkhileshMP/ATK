import { NavigationProp, ParamListBase } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-simple-toast';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux/UserRedux';
import styles from './styles';
import { AppStyles, Colors, Constants, Icons, Languages } from '../../common';
import { Header } from '../../components';

interface HomeProps {
    navigation: NavigationProp<ParamListBase>;
    goBack: () => void;
}

interface RootState {
    user: {
      attendanceList: any[];
    };
}

const Home: React.FC<HomeProps> = ({ goBack, navigation }) => {

  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [records, setRecords] = useState<any[]>([]);
  const [user, setUser] = useState({ name: 'John Smith', employeeId: 'EMP123' });

  const attendanceList = useSelector<RootState, any[]>((state) => state.user.attendanceList);

  useEffect(() => {
    (async () => {
      await loadRecords();
    })();
  }, []);

  const setAttendanceData = useCallback((value: any[]) => {
    dispatch(actions.setAttendanceData(value));
  }, [dispatch]);

  const clearAttendanceData = useCallback(() => {
    dispatch(actions.clearAttendanceData());
  }, [dispatch]);
  
  const toast = (message: string) => {
    Toast.show(message, 6);
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };
  
  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  
  const isDateInCurrentWeek = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);
    return date >= startOfWeek && date <= endOfWeek;
  };

  const loadRecords = async () => {
    try {
      const filtered = attendanceList.filter((r: any) => isDateInCurrentWeek(r.rawDate));
      setRecords(filtered);
    } catch (e) {
      console.error('Error loading records:', e);
    }
  };

  const saveRecords = async (updated: any) => {
    try {
      await setAttendanceData(updated);
    } catch (e) {
      console.error('Error saving records:', e);
    }
  };

  const handlePunch = async () => {
    const type = isPunchedIn ? Constants.type.PunchOut : Constants.type.PunchIn;
    const newRecord = {
      id: Date.now().toString(),
      date: getCurrentDate(),
      time: getCurrentTime(),
      rawDate: new Date().toISOString(),
      type,
      user: { ...user },
    };

    const updated = [newRecord, ...records];
    setRecords(updated);
    setIsPunchedIn(!isPunchedIn);
    await saveRecords(updated);
    toast(`${type} recorded successfully`);
  };

  const handleClearRecords = () => {
    Alert.alert(Languages.Confirm, Languages.ClearAttendance, [
      { text: Languages.Cancel, style: 'cancel' },
      {
        text: Languages.Clear,
        style: 'destructive',
        onPress: async () => {
          try {
            setRecords([]);
            await clearAttendanceData();
            toast(Languages.ClearAllData);
          } catch (e) {
            console.error('Error clearing records:', e);
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }: any) => (
    <View
      style={[
        styles.recordItem,
        item.type === Constants.type.PunchIn ? styles.inItem : styles.outItem,
      ]}
    >
      <View style={AppStyles.rowView}>
        <Icon
          name={item.type === Constants.type.PunchIn ? Icons.FontAwesome.signIn : Icons.FontAwesome.signOut}
          size={20}
          color={item.type === Constants.type.PunchIn ? Colors.SoftGreen : Colors.SoftRed}
          style={styles.icon}
        />
        <Text style={styles.date} allowFontScaling={false}>{item.date}</Text>
      </View>
      <Text style={styles.time} allowFontScaling={false}>{item.time}</Text>
      <Text style={styles.type} allowFontScaling={false}>{item.type}</Text>
      <Text style={styles.userLabel} allowFontScaling={false}>
        {item.user.name} ({item.user.employeeId})
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Header 
      title={Languages.HomeHeader}
      goBack={() => {}}
      />
      {/* <Text style={styles.title}>ATK - Attendance Tracker</Text> */}
      <Text style={styles.profileInfo} allowFontScaling={false}>
        Welcome, {user.name} ({user.employeeId})
      </Text>
      <View style={styles.innerContainer}>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.punchButton,
            { backgroundColor: isPunchedIn ? Colors.SoftRed : Colors.SoftGreen },
          ]}
          onPress={handlePunch}
        >
          <Icon
            name={isPunchedIn ? Icons.FontAwesome.signOut : Icons.FontAwesome.signIn}
            size={18}
            color={Colors.White}
            style={{ marginRight: 8 }}
          />
          <Text style={styles.buttonText} allowFontScaling={false}>
            {isPunchedIn ? Languages.PunchOut : Languages.PunchIn}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clearButton} onPress={handleClearRecords}>
          <Icon name={Icons.FontAwesome.trash} size={16} color={Colors.White} style={{ marginRight: 6 }} />
          <Text style={styles.clearText} allowFontScaling={false}>{Languages.ClearData}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle} allowFontScaling={false}>{Languages.ThisWeekAttendance}</Text>

      <FlatList
        data={records}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <MaterialIcons name={Icons.MaterialIcons.Empty} size={64} color={Colors.DarkGray} />
            <Text style={styles.emptyText}>{Languages.EmptyAttendance}</Text>
          </View>
        }
      />
      </View>
    </View>
  );
};

export default Home;
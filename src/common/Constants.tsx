import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Constants = {
  width,
  height,
  fontFamily: 'Poppins-Regular',
  fontBold: 'Poppins-Bold',
  fontFamilySemiBold: 'Poppins-SemiBold',
  fontFamilyMedium: 'Poppins-Medium',

  RECORDS_KEY: 'attendance_records',
  USER_KEY: 'user_profile',
  type: {
    PunchIn: 'Punch In',
    PunchOut: 'Punch Out'
  }
  // APIs
  //BaseUrl: 'https://....',
};


export default Constants;

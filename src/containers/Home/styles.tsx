import { StyleSheet } from 'react-native';
import { AppStyles, Colors, Constants } from '../../common';

export default StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: Colors.White
  },
  innerContainer: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: Colors.White
  },
  profileInfo: { 
    textAlign: 'center', 
    marginTop: 30,
    marginBottom: 10, 
    color: Colors.VeryDarkGray1, 
    fontFamily: Constants.fontFamily,
    ...AppStyles.fontSize11,
  },
  buttonContainer: { 
    alignItems: 'center', 
    marginBottom: 20 
  },
  punchButton: {
    ...AppStyles.rowView,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginBottom: 12,
  },
  buttonText: { 
    color: Colors.White, 
    ...AppStyles.fontSize12,
    fontFamily: Constants.fontFamilySemiBold,
    marginTop: 3
  },
  clearButton: {
    ...AppStyles.rowView,
    backgroundColor: Colors.DarkGray1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
  },
  clearText: { 
    color: Colors.White, 
    ...AppStyles.fontSize11, 
    fontFamily: Constants.fontFamilySemiBold,
    marginTop: 3
  },
  subtitle: { 
    marginBottom: 8,
    color: Colors.black,
    fontFamily: Constants.fontFamilySemiBold,
    ...AppStyles.fontSize12,
  },
  recordItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: Colors.VeryLightGray,
    borderRadius: 6,
    marginBottom: 10,
  },
  inItem: { 
    backgroundColor: Colors.LightGrayishGreen 
  },
  outItem: { 
    backgroundColor: Colors.LightGrayishRed 
  },
  icon: { 
    marginRight: 10 
  },
  date: { 
    marginTop: 2,
    color: Colors.black,
    fontFamily: Constants.fontFamilySemiBold,
    ...AppStyles.fontSize11
  },
  time: { 
    color: Colors.gray, 
    fontFamily: Constants.fontFamily,
    marginTop: 4,
    ...AppStyles.fontSize11
  },
  type: { 
    fontFamily: Constants.fontBold,
    color: Colors.pureBlue, 
    marginTop: 4,
    ...AppStyles.fontSize11
  },
  userLabel: {  
    marginTop: 4, 
    color: Colors.VeryDarkGray,
    fontFamily: Constants.fontFamily,
    ...AppStyles.fontSize11
  },
  emptyText: { 
    textAlign: 'center', 
    color: Colors.DarkGray, 
    marginTop: 20 ,
    fontFamily: Constants.fontFamily,
    ...AppStyles.fontSize12
  },
  emptyContainer: {
    ...AppStyles.centerView,
    paddingVertical: 32,
  },
});

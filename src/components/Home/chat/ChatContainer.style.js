import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default theme => {
  const {spacing, borderRadius, fontSize, fontWeight, colors} = theme;

  return StyleSheet.create({
    item: {
      padding: 10,
    },
    itemText: {
      fontSize: fontSize.lg,
      color: colors.colorWhite,
      marginLeft: 10,
    },
    ansText: {
      fontSize: fontSize.md,
      color: colors.colorWhite,
      letterSpacing: 1,
    },
    rowAc: {
      flexDirection: 'row',
    },
  });
};

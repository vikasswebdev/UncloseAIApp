import {View, Text, StyleSheet} from 'react-native';
import React, {useMemo} from 'react';
import {useTheme} from '@react-navigation/native';

const createStyles = theme => {
  const {spacing, borderRadius, fontSize, fontWeight, colors} = theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoText: {
      color: colors.colorWhite,
      fontSize: fontSize.xl,
      fontWeight: fontWeight.semiBold,
    },
  });
};

const HomeLogo = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {colors} = theme;

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>UnClose AI</Text>
    </View>
  );
};

export default HomeLogo;

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useMemo} from 'react';
import {Icon} from 'native-base';
import {useNavigation, useTheme} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import {useDrawerStatus} from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';

const createStyles = theme => {
  const {spacing, borderRadius, colors} = theme;

  return StyleSheet.create({
    headerContainer: {
      backgroundColor: colors.background,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {
      color: colors.colorWhite,
      marginRight: 5,
    },
    getPlusBtn: {
      flexDirection: 'row',
      backgroundColor: colors.backgroundDark,
      alignItems: 'center',
      padding: 8,
      borderRadius: 5,
    },
    rowAc: {
      flexDirection: 'row',
    },
  });
};

const HomeHeader = ({isNew}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {colors} = theme;

  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.headerContainer}>
      <View>
        <IconButton
          icon="menu"
          iconColor={colors.colorWhite}
          size={24}
          onPress={openDrawer}
        />
      </View>
      <TouchableOpacity>
        <View style={styles.getPlusBtn}>
          <Text style={styles.text}>Get Plus</Text>
          <Entypo name="star-outlined" color={colors.colorWhite} size={20} />
        </View>
      </TouchableOpacity>
      <View style={styles.rowAc}>
        {isNew && (
          <IconButton
            icon="plus"
            iconColor={colors.colorWhite}
            size={24}
            onPress={() => {
              navigation.navigate('HomeScreen', {
                prevChat: null,
              });
            }}
          />
        )}

        <IconButton
          icon="dots-vertical"
          iconColor={colors.colorWhite}
          size={24}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useMemo} from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';

const ChatListItem = ({title}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {colors} = theme;

  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('HomeScreen', {
          prevChat: title,
        });
      }}
      android_ripple={{
        borderless: false,
        color: colors.backgroundLight,
      }}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default ChatListItem;

const createStyles = theme => {
  const {spacing, borderRadius, fontSize, fontWeight, colors} = theme;

  return StyleSheet.create({
    item: {
      padding: 10,
    },
    itemText: {
      fontSize: fontSize.lg,
      color: colors.colorWhite,
    },
  });
};

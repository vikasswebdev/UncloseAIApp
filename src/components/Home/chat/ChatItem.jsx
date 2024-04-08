import {View, Text} from 'react-native';
import React, {memo, useMemo} from 'react';
import createStyles from './ChatContainer.style';
import {useTheme} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ChatItem = ({chatData, chatList, setChatList}) => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.item}>
      <View style={styles.rowAc}>
        <AntDesign name="questioncircleo" color={colors.colorWhite} size={20} />
        <Text style={styles.itemText}>{chatData?.qustion}</Text>
      </View>
      <Text style={styles.ansText}>{chatData?.ans}</Text>
    </View>
  );
};

export default memo(ChatItem);

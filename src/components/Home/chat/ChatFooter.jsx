import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useMemo, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';

const createStyles = theme => {
  const {spacing, borderRadius, fontSize, fontWeight, colors} = theme;

  return StyleSheet.create({
    chatContainer: {
      //   backgroundColor: colors.backgroundDark,
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
    },
    inputView: {
      flex: 1,
      backgroundColor: colors.backgroundDark,
      marginHorizontal: 5,
      borderRadius: borderRadius.full,
      paddingHorizontal: 10,
    },
    textInput: {
      fontSize: fontSize.lg,
      color: colors.colorWhite,
    },
  });
};

const ChatFooter = ({chatList, setChatList}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {colors} = theme;

  const [textInput, setTextInput] = useState('');

  const onSendText = () => {
    const obj = {
      id: `bd7acbea-c1b1-46c2-aed5-3ad53abb28ba${Math.random()}`,
      qustion: textInput,
      ans: `
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    };
    setChatList([...chatList, obj]);
    setTextInput('');
  };

  return (
    <View style={styles.chatContainer}>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Type here..."
          placeholderTextColor={colors.colorBlackLight}
          style={styles.textInput}
          multiline={true}
          value={textInput}
          onChangeText={txt => setTextInput(txt)}
        />
      </View>
      <IconButton
        icon="arrow-up"
        iconColor={colors.colorBlack}
        containerColor={colors.colorWhite}
        disabled={textInput.length <= 0 ? true : false}
        size={24}
        onPress={() => onSendText()}
      />
    </View>
  );
};

export default ChatFooter;

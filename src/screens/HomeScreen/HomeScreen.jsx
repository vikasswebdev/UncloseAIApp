import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useMemo, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import createStyles from './HomeScreen.style';
import HomeHeader from '../../components/HomeHeader';
import HomeLogo from '../../components/Home/HomeLogo';
import ChatFooter from '../../components/Home/chat/ChatFooter';
import ChatContainer from '../../components/Home/chat/ChatContainer';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    qustion: 'this question 1',
    ans: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    qustion: 'this question 1',
    ans: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    qustion: 'this question 1',
    ans: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    qustion: 'this question 1',
    ans: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
];

const HomeScreen = props => {
  const prevChat = props?.route?.params?.prevChat;

  const [isNewChat, setIsNewChat] = useState(true);

  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [chatList, setChatList] = useState([...DATA]);
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={styles.keyboardView}>
      <HomeHeader isNew={prevChat ? true : false} />
      {!prevChat && !isNewChat ? (
        <HomeLogo />
      ) : (
        <ChatContainer
          chatList={chatList}
          setChatList={setChatList}
          loading={loading}
        />
      )}
      <ChatFooter chatList={chatList} setChatList={setChatList} />
    </SafeAreaView>
  );
};

export default HomeScreen;

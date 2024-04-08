import {ScrollView} from 'react-native';
import React, {useMemo, useRef} from 'react';
import {useTheme} from '@react-navigation/native';
import createStyles from './ChatContainer.style';
import ChatItem from './ChatItem';
import {Skeleton, VStack} from 'native-base';

const ChatContainer = ({chatList, setChatList, loading}) => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const scrollViewRef = useRef();

  const onContentSizeChange = e => {
    scrollViewRef.current.getScrollResponder().scrollToEnd({animated: true});
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      onContentSizeChange={onContentSizeChange}
      ref={scrollViewRef}
      keyboardShouldPersistTaps="handled">
      {loading ? (
        <>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(ske => (
            <Skeleton.Text
              px="4"
              style={{marginTop: 20}}
              color={'dark.300'}
              key={ske}
            />
          ))}
        </>
      ) : (
        <>
          {chatList.map((item, idx) => {
            return (
              <ChatItem
                key={idx}
                chatData={item}
                chatList={chatList}
                setChatList={setChatList}
              />
            );
          })}
        </>
      )}
    </ScrollView>
  );
};

export default ChatContainer;

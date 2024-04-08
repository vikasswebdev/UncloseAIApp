import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import React, {useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {Avatar, Divider, IconButton, Searchbar, Text} from 'react-native-paper';
import ChatListItem from './ChatListItem';

const DrawerContent = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {colors} = theme;

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f3',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e2972',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb8ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa7f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-14557129d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53bb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd9aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-14571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3a53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-45571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed53ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd6-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-ad5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471fbd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-483-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-41f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        style={styles.searchBar}
        placeholderTextColor={colors.colorBlackLight}
        iconColor={colors.colorBlackLight}
        //   onChangeText={setSearchQuery}
        //   value={searchQuery}
      />

      {/* <ScrollView>
        <Text>DrawerContent</Text>
      </ScrollView> */}

      <FlatList
        data={DATA}
        renderItem={({item}) => <ChatListItem title={item.title} />}
        keyExtractor={item => item.id}
      />

      <Divider />
      <View style={styles.user}>
        <View style={styles.rowAc}>
          <Avatar.Icon size={50} icon="account" />
          <Text style={styles.userTextName} variant="titleMedium">
            Vikas Patel
          </Text>
        </View>
        <IconButton
          icon="dots-horizontal"
          iconColor={colors.colorWhite}
          size={24}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </View>
  );
};

export default DrawerContent;

const createStyles = theme => {
  const {spacing, borderRadius, fontSize, fontWeight, colors} = theme;

  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      padding: 10,
    },
    searchBar: {
      backgroundColor: colors.backgroundDark,
    },
    user: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    },
    userTextName: {
      color: colors.colorWhite,
      marginLeft: 10,
    },
    rowAc: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
};

import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
// import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import {LightTheme, DarkTheme} from './theme';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import DrawerContent from './components/Drawer/DrawerContent';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        // drawerActiveTintColor: 'black',
        // drawerActiveBackgroundColor: '#fff',
        drawerType: 'slide',
        swipeEdgeWidth: 50,
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      {/* <Drawer.Screen
        name="home"
        component={NahTabScreen}
        options={{
          title: 'Dashboard',
        }}
      /> */}
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="MyScreen2" component={Screen2} />
    </Drawer.Navigator>
  );
};

const Router = () => {
  const theme = DarkTheme;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <SafeAreaView style={styles.container}>
        <NavigationContainer theme={theme}>
          {/* <BottomSheetModalProvider> */}
          <Stack.Navigator
            initialRouteName="Drawer"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Drawer" component={MainDrawer} />
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
          </Stack.Navigator>
          {/* </BottomSheetModalProvider> */}
        </NavigationContainer>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Router;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

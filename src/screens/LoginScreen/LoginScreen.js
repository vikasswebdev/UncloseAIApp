import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useMemo} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import createStyles from './LoginScreen.style';
import {useTheme} from '@react-navigation/native';
import i18n from '../../i18n';
import {Controller, useForm} from 'react-hook-form';
import images from '../../constants/images';
import {EMAIL_REGEX} from '../../helpers/formHelper';
import TextInputField from '../../components/TextInput';
import LoaderButton from '../../components/LoaderButton';

const LoginScreen = ({navigation}) => {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const {navigate} = navigation;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = data => {
    // const { email, password } = data;
    // dispatch(authActions.doLogin({ email, password }));
    // navigation.navigate('Screen1');
    navigate('Drawer', {screen: 'HomeScreen'});
  };

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    } catch (err) {
      console.log('handleGoogleSignIn err', err);
    }
  };

  return (
    <SafeAreaView style={styles.keyboardView}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="handled">
        <View style={styles.logoView}>
          <Image style={styles.logo} source={images.login} />
        </View>
        <View style={styles.titleView}>
          <Text lg medium color={colors.textDark} style={styles.titleText}>
            {i18n.t('LOGIN.TITLE')}
          </Text>
          {/* {baseUrl ? (
            <Text sm color={colors.textLight} style={styles.subTitleText}>
              {i18n.t('LOGIN.DESCRIPTION', { baseUrl })}
            </Text>
          ) : null} */}
        </View>

        <View style={styles.contentView}>
          <View style={styles.formView}>
            <View>
              <Controller
                control={control}
                rules={{
                  required: i18n.t('LOGIN.EMAIL_REQUIRED'),
                  pattern: {
                    value: EMAIL_REGEX,
                    message: i18n.t('LOGIN.EMAIL_ERROR'),
                  },
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInputField
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errors={errors}
                    error={errors.email}
                    label={i18n.t('LOGIN.EMAIL')}
                    keyboardType="email-address"
                    errorMessage={i18n.t('LOGIN.EMAIL_ERROR')}
                    secureTextEntry={false}
                  />
                )}
                name="email"
              />
              <View style={styles.spacer} />
              <View />
              <Controller
                control={control}
                rules={{
                  required: i18n.t('LOGIN.PASSWORD_REQUIRED'),
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInputField
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    errors={errors}
                    error={errors.password}
                    label={i18n.t('LOGIN.PASSWORD')}
                    keyboardType="default"
                    errorMessage={i18n.t('LOGIN.PASSWORD_ERROR')}
                    secureTextEntry={true}
                  />
                )}
                name="password"
              />
            </View>
            <TouchableOpacity
              style={styles.forgotView}
              onPress={() => navigate('ResetPassword')}>
              <Text xs medium color={colors.textLight}>
                {i18n.t('LOGIN.FORGOT_PASSWORD')}
              </Text>
            </TouchableOpacity>
            <View style={styles.loginButtonView}>
              <LoaderButton
                titleStyle={styles.loginButton}
                // loading={isLoggingIn}
                colorScheme="primary"
                onPress={handleSubmit(onSubmit)}
                size="expanded"
                text={i18n.t('LOGIN.LOGIN')}
              />
            </View>
            <View style={styles.loginButtonView}>
              <GoogleSigninButton
                size={GoogleSigninButton.Size.Standard}
                color={GoogleSigninButton.Color.Dark}
                onPress={handleGoogleSignIn}
                // disabled={this.state.isSigninInProgress}
              />
            </View>
          </View>

          <View style={styles.linksContainer}>
            <View style={styles.accountView}>
              {/* {appName === 'Chatwoot' && (
                <>
                  <TouchableOpacity onPress={doSignup}>
                    <Text xs medium color={colors.textLight}>
                      {i18n.t('LOGIN.CREATE_ACCOUNT')}
                    </Text>
                  </TouchableOpacity>
                  <Text color={colors.textLight}>{'   |   '}</Text>
                </>
              )} */}

              <TouchableOpacity onPress={() => navigate('ConfigureURL')}>
                <Text xs medium color={colors.textLight}>
                  {i18n.t('LOGIN.CHANGE_URL')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.accountView}>
              <TouchableOpacity
              //   onPress={toggleChangeLanguageModal}
              >
                <Text xs medium color={colors.textLight}>
                  {i18n.t('LOGIN.CHANGE_LANGUAGE')}
                </Text>
              </TouchableOpacity>
            </View>
            {/* <BottomSheetModal
              bottomSheetModalRef={changeLanguageModal}
              initialSnapPoints={changeLanguageModalModalSnapPoints}
              showHeader
              headerTitle={i18n.t('LOGIN.CHANGE_LANGUAGE')}
              closeFilter={closeChangeLanguageModal}
              children={
                <LanguageSelector
                  activeValue={activeLocale}
                  colors={colors}
                  onPress={onChangeLanguage}
                />
              }
            /> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

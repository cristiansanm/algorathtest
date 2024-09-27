import { AppText, ScreenContainer, Spacer } from '@components/index';
import { RoutesActions } from '@router/routes/actions';
import { RoutesNames } from '@router/routes/names';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './MainPage.styles';

const MainPage = () => {
  return (
    <ScreenContainer>
      <View style={styles.contentContainer}>
        <Image
          source={require('@resources/assets/logoApp.png')}
          style={styles.image}
        />
        <Spacer />
        <TouchableOpacity
          onPress={() => RoutesActions.route(RoutesNames.UsersTab, {})}>
          <View style={styles.buttonContainer}>
            <AppText color="white" fontWeight="medium">
              Go To Users List
            </AppText>
          </View>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

export default MainPage;

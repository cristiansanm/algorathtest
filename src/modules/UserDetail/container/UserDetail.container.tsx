import { ScreenContainer, Spacer } from '@components/index';
import AntDesign from '@expo/vector-icons/AntDesign';
import { RoutesActions } from '@router/routes/actions';
import { separateNameAndSurname } from '@utils/index';
import { Text, TouchableOpacity, View } from 'react-native';
import { UserDataText } from '../components';
import { useUserDetailsSelector } from '../hooks/useUserDetailsSelector';
import { styles } from './UserDetail.styles';

export const UserDetail = () => {
  const { user } = useUserDetailsSelector();
  const { name, surname } = separateNameAndSurname(user?.name || '');
  if (!user) {
    return <Text>No user</Text>;
  }
  return (
    <ScreenContainer hasHorizontalPadding>
      <Spacer size={2} />
      <View style={styles.dataContainer}>
        <View style={styles.userCardContainer}>
          <View style={styles.userIcon}>
            <AntDesign name="user" size={50} color="black" />
          </View>
          <Spacer size={2} horizontal />
          <View style={styles.userData}>
            <UserDataText title="First Name" value={name} />
            <Spacer />
            <UserDataText title="Last Name" value={surname} />
            <Spacer />
            <UserDataText title="Email" value={user.email} />
            <Spacer />
            <UserDataText title="ZIP Code" value={user.address.zipcode} />
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={() => RoutesActions.pop()}>
        <View style={styles.buttonContainer}>
          <AntDesign name="back" size={24} color="white" />
        </View>
      </TouchableOpacity>
      <Spacer />
    </ScreenContainer>
  );
};

import { AppText } from '@components/AppText';
import { FC } from 'react';

export const UserDataText: FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <AppText size={'h5'}>
      <AppText size={'h5'} fontWeight="thin">
        {title}:{' '}
      </AppText>
      <AppText size={'h5'}>{value}</AppText>
    </AppText>
  );
};

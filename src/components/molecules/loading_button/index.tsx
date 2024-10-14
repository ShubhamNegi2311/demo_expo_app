import {BaseText} from 'components/base_componets/base_text';
import BounceView from 'components/organisms/bounce_view';
import React from 'react';
import {ActivityIndicator} from 'react-native';

type LoadingButtonProps = {
  title: string;
  height: number;
  width: number;
  borderRadius: number;
  backgroundColor: string;
  textColor: string;
  onPress: () => void;
  isLoading?: boolean;
};

const LoadingButtonComp: React.FC<LoadingButtonProps> = props => {
  const {
    onPress,
    title,
    height,
    width,
    borderRadius,
    backgroundColor,
    textColor,
  } = props;
  return (
    <BounceView
      onPress={props?.isLoading ?? false ? undefined : onPress}
      style={{
        height: height,
        width: width,
        borderRadius: borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroundColor,
      }}>
      {props?.isLoading ?? false ? (
        <ActivityIndicator size={'large'} color={'#FFFFFF'} />
      ) : (
        <BaseText children={title} textColor={props?.textColor ?? '#F5F5F5'} />
      )}
    </BounceView>
  );
};

export const LoadingButton = React.memo(LoadingButtonComp);

import React from 'react';
import {Animated, Pressable, ViewProps} from 'react-native';

interface BounceViewProps extends ViewProps {
  children?: React.ReactNode;
  onPress?: () => void;
}

const BounceView: React.FC<BounceViewProps> = props => {
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.8];
  const scale = animation.interpolate({inputRange, outputRange});

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Pressable
      onPress={props?.onPress ?? undefined}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <Animated.View style={[props?.style ?? {}, {transform: [{scale}]}]}>
        {props?.children ?? undefined}
      </Animated.View>
    </Pressable>
  );
};

export default BounceView;

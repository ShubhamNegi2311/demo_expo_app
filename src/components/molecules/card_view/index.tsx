import React from 'react';
import {Pressable, PressableProps, StyleSheet} from 'react-native';

interface CardViewCompProps extends PressableProps {
  height: number;
  width: number;
  bgColor: string;
  borderRadius: number;
  children?: React.ReactNode;
  onCardPress?: () => void;
}

const CardViewComp: React.FC<CardViewCompProps> = props => {
  const {height, width, bgColor, borderRadius} = props;
  return (
    <Pressable
      style={[
        style.cardView,
        {
          height: height,
          width: width,
          backgroundColor: bgColor,
          borderRadius: borderRadius,
        },
      ]}
      onPress={props?.onCardPress ?? undefined}>
      {props?.children ?? undefined}
    </Pressable>
  );
};

export const CardView = React.memo(CardViewComp);

const style = StyleSheet.create({
  cardView: {
    marginVertical: 20,
  },
});

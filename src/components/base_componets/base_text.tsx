import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

interface BaseTextCompProps extends TextProps {
  fontWeight?: 'bold' | 'normal' | 'semibold';
  fontSize?: number;
  textColor?: string;
  style?: TextStyle;
}

const BaseTextComp: React.FC<BaseTextCompProps> = props => {
  return (
    <Text
      style={[
        {
          fontWeight: props?.fontWeight ?? 'bold',
          fontSize: props?.fontSize ?? 16,
          color: props?.textColor ?? '#FFFFFF',
        },
        props?.style ?? {},
      ]}>
      {props?.children ?? undefined}
    </Text>
  );
};

export const BaseText = React.memo(BaseTextComp);

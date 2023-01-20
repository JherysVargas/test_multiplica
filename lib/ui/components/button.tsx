import React from 'react';
import {Pressable, Text, StyleSheet, GestureResponderEvent} from 'react-native';
import {primaryColor} from '../../core/theme/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type IPropsButton = {
  label: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};

const Button = ({label, onPress}: IPropsButton) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <Pressable
      onPress={onPress}
      style={{...styles.button, marginBottom: bottom + 5}}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 55,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryColor,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  },
});

export default Button;

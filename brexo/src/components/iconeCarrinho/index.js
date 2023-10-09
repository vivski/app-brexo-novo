import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 

export default function IconeCarrinho() {
    const navigation = useNavigation();
  
    const handlePress = () => {
      navigation.navigate('TelaCarrinho');
    };
  
    return (
    <View>
    <TouchableOpacity onPress={handlePress}>
    <IconButton icon="cart" size={25} color="#7A6276" />
    </TouchableOpacity>
    </View>
    );
  }

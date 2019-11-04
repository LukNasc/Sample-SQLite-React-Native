import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TitleBox, TextTitle } from './styles';

const Header = ({navigation}) => (
    <TitleBox>
        <TextTitle>Lista de Tarefas</TextTitle>
    </TitleBox>
);

export default Header;

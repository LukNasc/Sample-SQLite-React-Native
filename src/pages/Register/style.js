import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex:1;
`;

export const Input = styled.TextInput`
    border:2px solid #000;
    border-radius: 4px;
    padding:5px;
    height: 40px;
    width:70%;
    margin-bottom:20px;
`;
export const Label = styled.Text`
    font-size: 15px;
    color:#202020;
`;

export const Form = styled.View`
    flex:1;
  align-items:center;
`;

export const Button = styled.TouchableOpacity`
    padding: 20px;
    align-items:center;
    justify-content:center;
    background: #000;
`;

export const TextButton = styled.Text`
    color:#fff;
`;



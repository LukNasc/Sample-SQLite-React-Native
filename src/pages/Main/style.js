import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
`;

export const TextList = styled.Text`
    color: #000;
    font-size:20px;
    flex:1;
`;

export const ItemList = styled.View`
    padding:10px;
    background:#CCC;
    flex-direction:row;
    height:40px;
    margin:20px;
    border-radius:4px;
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

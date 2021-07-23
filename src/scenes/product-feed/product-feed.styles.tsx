import styled from 'styled-components/native';

export const TagSeparator = styled.View`
    margin-left: 20px;
`

export const ProductContainer = styled.TouchableOpacity`
    align-items: flex-start;
    flex-basis: 0;
    flex-grow: 1;
    padding: 0px 14px 14px 14px;
`

export const TagList = styled.FlatList`
    height: 80px;
    max-height: 80px; 
    padding-horizontal: 14px; 
    margin-vertical: 15px;
`

export const ProductList = styled.FlatList`
    flex-grow: 0;
`
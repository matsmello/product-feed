import { Dimensions } from 'react-native';
import styled from 'styled-components/native';


export const ProductImage = styled.Image`
    width: 100%;
    height: ${Dimensions.get('window').width / 2}px;
    max-height: 195px;
    border-radius: 10px;
`

export const ProductImageMock = styled.View`
    width: 100%;
    height: ${Dimensions.get('window').width / 2}px;
    max-height: 195px;
    border-radius: 10px;
`
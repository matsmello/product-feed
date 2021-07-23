import React from 'react'
import { ImageProps } from 'react-native'
import * as S from './product-image.styles'

interface Props {
    src?: ImageProps
}

const ProductImage: React.FC<Props> = ({ src }) => {
    if (src) {
        return (
            <S.ProductImage source={src} />
        )
    }

    return (
        <S.ProductImageMock />
    )
}

export default ProductImage;

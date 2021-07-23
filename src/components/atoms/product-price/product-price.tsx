import React from 'react'
import * as S from './product-price.styles'

const ProductPrice: React.FC<{ price: number }> = ({ price }) => {
    return (
        <S.ProductPrice>
            {price}
        </S.ProductPrice>
    )
}

export default ProductPrice;

import React from 'react'
import * as S from './product-brand.styles'

const ProductBrand: React.FC<{ name: string }> = ({ name }) => {

    return (
        <S.ProductBrand>
            {name}
        </S.ProductBrand>
    )
}

export default ProductBrand;

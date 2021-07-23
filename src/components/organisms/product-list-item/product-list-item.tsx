import React from 'react'
import { ProductDescription } from '_molecules'
import { ProductImage } from '_atoms'

import * as S from './product-list-item.styles'

const PRODUCT_IMAGE = require('_assets/images/green-beer.jpg')

const CategoryBanner: React.FC<{ product: IProduct }> = ({ product }) => {

    return (
        <S.ProductContainer>
            <ProductImage src={product.empty ? null : PRODUCT_IMAGE} />
            <ProductDescription product={product} />
        </S.ProductContainer>
    )
}

export default CategoryBanner;

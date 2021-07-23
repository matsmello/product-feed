import React from 'react'
import * as S from './product-name.styles'

const ProductName: React.FC<{ name: string }> = ({ name }) => {
    return (
        <S.ProductName>
            {name}
        </S.ProductName>
    )
}

export default ProductName;

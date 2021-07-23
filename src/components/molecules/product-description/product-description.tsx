import React from 'react'
import { ProductBrand, ProductName, ProductPrice } from '_atoms'

interface Props {
    product: IProduct
}

const ProductDescription: React.FC<Props> = ({ product }) => {
    if (product.empty) {
        return <></>
    }

    return (
        <>
            <ProductBrand name={product.brand.name} />
            <ProductName name={product.name}>{ }</ProductName>
            <ProductPrice price={`${product.price} €`} />
        </>
    )
}

export default ProductDescription;


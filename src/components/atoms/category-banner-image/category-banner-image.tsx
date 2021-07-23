import React from 'react'
import * as S from './category-banner-image.styles'

const CATEGORY_BANNER_IMAGE = require('_assets/images/female-legs.jpg')

type Props = {
    children?: React.ReactNode;
};

const CategoryBannerImage: React.FC<Props> = ({ children }) => {
    return (
        <S.CategoryBannerImage
            source={CATEGORY_BANNER_IMAGE}
            height={200}
            width={100}
            resizeMode="stretch"
            imageStyle={{ borderRadius: 10 }}
        >
            {children}
        </S.CategoryBannerImage>
    )
}

export default CategoryBannerImage;

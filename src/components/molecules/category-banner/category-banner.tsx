import React from 'react'
import { CategoryBannerText, CategoryBannerImage } from '_atoms'
import * as S from './category-banner.styles'

const CategoryBanner: React.FC<{}> = () => {
    return (
        <S.CategoryBanner>
            <CategoryBannerImage>
                <CategoryBannerText />
            </CategoryBannerImage>
        </S.CategoryBanner>
    )
}

export default CategoryBanner;

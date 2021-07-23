import React from 'react'
import * as S from './sub-category-button.styles'

const SubCategoryButton: React.FC<{ selected: boolean, name: string, onPress: () => {} }> = ({ selected, name, onPress }) => {
    return (
        <>
            <S.TagContainer selected={selected} onPress={onPress}>
                <S.TagText selected={selected}>{name}</S.TagText>
            </S.TagContainer>
        </>
    )
}

export default SubCategoryButton;

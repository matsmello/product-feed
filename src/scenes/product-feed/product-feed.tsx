import React, { useState } from 'react'
import { SafeAreaView, View, ListRenderItem } from 'react-native'
import * as S from './product-feed.styles'

import { SubCategoryButton } from '_atoms'
import { CategoryBanner } from '_molecules'
import { ProductListItem } from '_organisms'

const ProductFeed = () => {
    const ALL_PRODUCTS_SUB_CATEGORY: ISubCategory = {
        name: 'All Products',
        id: "all-products",
        productIds: []
    }

    const COLUMNS = 2

    const [selectedSubCategory, setSelectedSubCategory] = useState<ISubCategory>(ALL_PRODUCTS_SUB_CATEGORY)
    const [category, setCategory] = useState({ subCategories: [] });
    const [products, setProducts] = useState([]);

    React.useEffect(() => {
        fetchCategory()
        fetchProducts()
    }, [])

    const fetchCategory = () => {
        fetch("/api/category/personal-care")
            .then((res) => res.json())
            .then((json) => setCategory(json.category))
    }

    const fetchProducts = (subCategory: ISubCategory = ALL_PRODUCTS_SUB_CATEGORY) => {
        let url = `/api/product/${ALL_PRODUCTS_SUB_CATEGORY.id}`;
        let validations: any = {
            "undefined": true,
            "all-products": true,
        }

        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setProducts(json.products.filter((product: IProduct) => {
                    if (validations[subCategory.id]) {
                        return true
                    }
                    // Filter current products based on the subCategory.productIds
                    return subCategory.productIds.includes(product.id)
                }))
            })
    }


    const handleSubCategoryClick = (subCategory: ISubCategory) => {
        setSelectedSubCategory(subCategory)
        fetchProducts(subCategory);
    }

    const createRows = (data: IProduct[]) => {
        // Verify if the data match with the current columns configuration
        if (data.length % COLUMNS == 0) return data;

        const rows = Math.floor(data.length / COLUMNS);

        let lastRowElements = data.length - rows * COLUMNS;

        let brand: IBrand = { name: "brand" }

        // Populate the data with last column to prevent
        // the product to fill the entire column

        while (lastRowElements !== COLUMNS) {
            data.push({
                id: lastRowElements,
                brand,
                name: `empty-${lastRowElements}`,
                empty: true,
                price: 0
            });
            lastRowElements += 1;
        }

        return data;
    }

    const renderProductItem = ({ item }: { item: IProduct | any }) => (
        <ProductListItem product={item} />
    )

    const renderTagItem: ListRenderItem<ISubCategory | any> = ({ item }) => (
        <SubCategoryButton onPress={() => handleSubCategoryClick(item)} selected={selectedSubCategory.id == item.id} name={item.name} />
    )

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CategoryBanner />
            <View>
                <S.TagList
                    ItemSeparatorComponent={() => <S.TagSeparator />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={[ALL_PRODUCTS_SUB_CATEGORY].concat(category.subCategories)}
                    renderItem={renderTagItem}
                    keyExtractor={(item, index) => `${item}-${index}`}
                    contentContainerStyle={{ paddingRight: 30, alignItems: "center", }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <S.ProductList
                    showsVerticalScrollIndicator={false}
                    data={createRows(products)}
                    renderItem={renderProductItem}
                    numColumns={COLUMNS}
                    keyExtractor={(item: IProduct | any, index) => `${item.id}-${index}`}
                    ListEmptyComponent={<View />}
                />
            </View>
        </SafeAreaView>
    )
}

export default ProductFeed

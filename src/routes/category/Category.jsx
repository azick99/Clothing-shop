import { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/ProductCard'
import { categoriesSelector } from '../../store/categories/category.selector'
import { CategoriesContainer, CategoryTitle } from './Category.styles'

const Category = () => {
  const { category } = useParams()
  console.log('render/re-redering category component');
  const categoriesMap = useSelector(categoriesSelector)
  const [products, setProducts] = useState(categoriesMap[category])


  useEffect(() => {
    console.log('effect fired calling setProducts');
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoriesContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoriesContainer>
    </Fragment>
  )
}

export default Category

import { Fragment } from "react"
import { useSelector } from "react-redux"
import CategoryPreview from "../../components/category-preview/CategoryPreview"
import {
  categoriesSelector,
  selectIsCategoriesLoading,
} from "../../store/categories/category.selector"
import Spinner from "../../components/spinner/Spinner"

const CategoriesPreview = () => {
  const categoriesMap = useSelector(categoriesSelector)
  const isLoading = useSelector(selectIsCategoriesLoading)
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title]
          return (
            <CategoryPreview key={title} title={title} products={products} />
          )
        })
      )}
    </Fragment>
  )
}

export default CategoriesPreview

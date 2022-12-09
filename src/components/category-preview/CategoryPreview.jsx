import { Link } from 'react-router-dom'
import ProductCard from '../product-card/ProductCard'
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from './CategoryPreview.styles'

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title>
          <Link to={`/shop/${title}`}>{title.toUpperCase()}</Link>
        </Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview

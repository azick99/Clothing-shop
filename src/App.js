import './categories.styles.scss'
import categories from './category-menu/categories'
import CategoryItem from './components/CategoryItem'

function App() {
  return (
    <div className="App">
      <div className="categories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}

export default App

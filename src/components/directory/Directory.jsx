import categories from '../../category-menu/categories.js'
import DirectoryItem from '../directory-item/DirectoryItem.jsx'
import { DirectoryContainer } from './Directory.style.jsx'

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  )
}

export default Directory

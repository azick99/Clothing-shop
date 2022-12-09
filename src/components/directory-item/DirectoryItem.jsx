import { useNavigate } from 'react-router-dom'
import {
  BackgroundImg,
  Body,
  DirectoryItemContaner,
} from './DirectoryItem.style'

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)
  return (
    <DirectoryItemContaner onClick={onNavigateHandler}>
      <BackgroundImg imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContaner>
  )
}

export default DirectoryItem

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import {
  fetchCategoriesAsync,
} from '../../store/categories/category.action'
import CategoriesPreview from '../categories-preview/CategoriesPreview'
import Category from '../category/Category'

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategoriesAsync())
  }, [dispatch])
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop

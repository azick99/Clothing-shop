import { createSelector } from 'reselect' // memoize selectors

const selectCategoryReducer = (state) => state.categories

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categories
) // memoizion making

export const categoriesSelector = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category
      acc[title.toLowerCase()] = items
      return acc
    }, {})
  }
)

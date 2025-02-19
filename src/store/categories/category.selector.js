import { createSelector } from "reselect";
// Memorization = 입력값이 바뀌지 않으면, 계산하지않고 이전 값을 캐시함. 
// input selector, output func 을 만들어야 함.

// Redux state에서 categories부분을 선택해옴 
const selectCategoryReducer = (state) => state.categories;

//createSelector을 이용해서, categoriesSlice.categories를 가져옴 
export const selectCategories = createSelector(
    [selectCategoryReducer], // input selector
    (categoriesSlice) => categoriesSlice.categories // output func
);

// categories를 매핑해서, 오브젝트로 만듦.
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);
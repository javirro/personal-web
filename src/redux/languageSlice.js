import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: 'language',
  initialState: "en",
  reducers: {
    changeLanguage: (state, action) => action.payload
  }
})

// export default store
const { actions, reducer } = languageSlice
export const { changeLanguage } = actions
export default reducer
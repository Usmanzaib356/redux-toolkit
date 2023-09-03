import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('coins/fetchData', async () => {
      try {
            const url = 'https://api.coingecko.com/api/v3/coins/'
            const res = await axios.get(url)
            return res.data

      } catch (error) {
            throw error
      }
})

const dataSlice = createSlice({
      name: 'coins',
      initialState: [],
      reducers: {},
      extraReducers: (builder) => {
            builder
                  .addCase(fetchData.fulfilled, (state, action) => {
                        return action.payload
                  })
                  .addCase(fetchData.rejected, (state, action) => {
                        console.error('API call failed:', action.error);
                  })
      }
})

export default dataSlice.reducer;

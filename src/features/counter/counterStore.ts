import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
export const fetchIncrement = createAsyncThunk(
    'counter/fetchIncrement',
    async (value: number) => {
        const response = await axios.put('/counter/increment', {value: value})
        return response.data
    }
)

export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        value: 0,
    },
    reducers:{
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    },
    extraReducers: {
        [`${fetchIncrement.fulfilled}`]: (state:{value: number}, action: PayloadAction<{value: number}>) => {
            state.value = action.payload.value
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
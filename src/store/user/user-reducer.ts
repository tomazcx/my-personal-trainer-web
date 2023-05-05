import {createSlice} from "@reduxjs/toolkit";
import {api} from "../../utils/api";

export type User = {
	name: string
	avatar: string | undefined
	email: string
	ProviderInfo: {
		description: string | undefined;
		startHour: number;
		endHour: number;
		category: {
			category: string
		}
	}
}

type USER_REDUCER = {
	token: string | null,
	user: User | null
}

const initialState: USER_REDUCER = {
	token: null,
	user: null
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCurrentUser(state, action) {
			state.token = action.payload.token
			state.user = action.payload.user
		}
	}
})

export const {setCurrentUser} = userSlice.actions
export const userReducer = userSlice.reducer

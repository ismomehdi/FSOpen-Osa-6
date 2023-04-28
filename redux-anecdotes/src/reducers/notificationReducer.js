import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        createNotification(state, action) {
            return action.payload
        },
        resetNotification(state, action) {
            return ''
        }
    }
})

export const { createNotification, resetNotification } = notificationSlice.actions
export default notificationSlice.reducer
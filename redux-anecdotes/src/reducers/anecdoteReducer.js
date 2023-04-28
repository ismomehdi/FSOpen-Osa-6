import { createSlice } from '@reduxjs/toolkit'

const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const anecdote = action.payload
      state.push((anecdote))
    },
    vote(state, action) {
      const id = action.payload.id
      const votedAnecdote = state.find(a => a.id === id)

      if (votedAnecdote) {
        votedAnecdote.votes++
      }
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, vote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export { asObject }
export default anecdoteSlice.reducer
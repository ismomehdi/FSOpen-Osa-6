import { handleVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from "react-redux"

const AnecdoteList = () => {
    const anecdotes = useSelector(({ filter, anecdotes }) => {
        if (filter === '') {
            return anecdotes
        } else {
            return anecdotes.filter(
                anecdote => anecdote.content.toLowerCase()
                .includes(filter.toLowerCase()))
        }
    })
    const dispatch = useDispatch()

    const vote = (id) => {
      dispatch(handleVote(id))
    }

    return (
        anecdotes
            .sort((a, b) => b.votes - a.votes)
            .map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )
    )
}

export default AnecdoteList
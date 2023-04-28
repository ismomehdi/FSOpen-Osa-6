import { vote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'
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

    const handleVote = (id) => {
      dispatch(vote({ id }))
      dispatch(createNotification(`You voted '` + anecdotes.find(a => a.id === id).content + `'`))
    }

    const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

    return (
        sortedAnecdotes
            .map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )
    )
}

export default AnecdoteList
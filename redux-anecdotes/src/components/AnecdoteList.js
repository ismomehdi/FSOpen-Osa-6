import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
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
      dispatch(voteAnecdote(id))
      const anecdote = anecdotes.find(a => a.id === id)
      dispatch(setNotification(`You voted '${anecdote.content}'`, 10))
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
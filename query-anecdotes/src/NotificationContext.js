import { createContext, useContext, useReducer } from 'react'

const notificationReducer = (state, action) => {
    switch (action.type) {
        case 'SET':
            return action.payback
        case 'CLEAR':
            return ''
        default: return state
    }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, '')

    return (
        <NotificationContext.Provider value={[notification, notificationDispatch]}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[0]
}

export const useNotificationDispatch = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[1]
}

export const useSetNotification = () => {
    const dispatch = useNotificationDispatch()
  
    const setNotification = (message, duration = 5000) => {
      dispatch({ type: 'SET', payback: message })
  
      setTimeout(() => {
        dispatch({ type: 'CLEAR' })
      }, duration)
    }
  
    return setNotification
  }
  


export default NotificationContext

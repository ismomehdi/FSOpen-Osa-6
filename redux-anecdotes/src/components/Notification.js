import { useSelector, useDispatch } from 'react-redux'
import { resetNotification } from '../reducers/notificationReducer'
import React, { useEffect } from 'react'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(resetNotification())
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [dispatch, notification])
  

    if (notification) {
      return (
        <div style={style}>
          {notification}
        </div>
      )
      }
  }


export default Notification
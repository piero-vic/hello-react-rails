import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchGreeting } from "../redux/greeting"

const Greeting = () => {
  const dispatch = useDispatch()
  const greeting = useSelector(state => state.greeting)

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return <p>{greeting.text}</p>
}

export default Greeting

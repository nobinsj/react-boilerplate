
import { useAppDispatch } from "../../redux/hooks"
import { addTodo } from "./slice"

const Inbox = () => {

  const dispatch = useAppDispatch()
  dispatch(addTodo())
  return (

    <div>Inbox</div>
  )
}

export default Inbox
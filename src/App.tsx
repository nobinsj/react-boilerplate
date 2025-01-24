import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import Root from './Root'

function App() {

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}

export default App

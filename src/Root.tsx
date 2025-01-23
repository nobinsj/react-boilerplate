import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
  },
})

const Root = () => {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true, }} />
  )
}

export default Root
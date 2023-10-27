import { createBrowserRouter } from "react-router-dom"
import { Home } from './pages/home'
import { Admin } from './pages/admin'
import { Login } from './pages/login'
import { Tabela } from "./pages/tabela"


import { Private } from "./pages/routes/private"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <Private><Admin /></Private>
  },
  {
    path: '/table',
    element: <Private><Tabela /></Private>
  }
])

export { router }
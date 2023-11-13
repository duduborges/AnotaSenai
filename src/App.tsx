import { createBrowserRouter } from "react-router-dom"
import { Home } from './pages/home'
import { Admin } from './pages/tabela/admin'
import { Login } from './pages/login'
import { Tabela } from "./pages/tabela"
import { Register } from "./pages/cadastro"


import { Private } from "./routes/Private"


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
    path: '/post/new',
    element: <Private><Admin /></Private>
  },
  {
    path: "/register",
    element: <Register />

  },
  {
    path: '/post',
    element: <Private><Tabela /></Private>
  },
  // {
  //   path: "/help",
  //   element: <Ajuda />
  // }
])

export { router }
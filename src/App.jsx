import{createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";

import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";


function Root(){
  return(
      <>
        <Home/>
        <Routes>
          <Route path="/components/Home" element={<Home/>}/>
          <Route path="/components/Projects" element={<Projects/>}/>
          <Route path="/" element={<About/>}/>
        </Routes>
      </>
  )
}

const router = createBrowserRouter(
  [{path: "*", Component: Root}]
)

export default function App() {

  return (
    <RouterProvider router={router}/>
  );
}

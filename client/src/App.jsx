import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import TeacherSignUp from "./pages/TeacherSignUp";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher/signup" element={<TeacherSignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

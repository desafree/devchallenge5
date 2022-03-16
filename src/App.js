import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SingleQuotes from "./SingleQuote";
import AuthorQuotes from "./AuthorQuotes";


function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<SingleQuotes/>}></Route>
      <Route path="/author/:author" element={<AuthorQuotes/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

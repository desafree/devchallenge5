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
      <Route path="/devchallenge444/" element={<SingleQuotes/>}></Route>
      <Route path="/devchallenge444/author/:author" element={<AuthorQuotes/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

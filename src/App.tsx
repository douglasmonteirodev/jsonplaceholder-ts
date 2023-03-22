import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import PostComment from "./pages/PostComment";
import UserDetail from "./pages/UserDetail";
import NotFound from "./pages/NotFound/index";

function App() {
  return (
    <Router>
      <div className="app">
        <Link to="/">
          <header>JSON PLACEHOLDER</header>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id/comments" element={<PostComment />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h1>Welcome to the Home page!</h1>
      <img src="/welcomemat.jpg" />
    </>
  );
}

function About() {
  return (
    <div>
      <ol>
        <li>when a user navigates to the About page</li>
        <li>this is what happens under the hood</li>
        <li>we make an about component that says "About"</li>
        <li>we use a route with the element prop </li>
        <li>this element prop will connect '/about' path to the about component</li>
        <li>the about page has its own link, which you can name to your liking</li>
      </ol>
    </div>
  );
}
export default App;

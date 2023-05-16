// react
import { lazy, Suspense } from "react";
// react-router-dom
import { Routes, Route } from "react-router-dom";

// styles
import "./App.styles.scss";

// components
import NavBar from "./components/NavBar/index.js";

// pages
const Home = lazy(() => import("./pages/Home/index.js"));

const App = () => {
  return (
    <div className="App">
      <div className="container pt-2">
        <Suspense fallback="Loading...">
          <NavBar />

          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;

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
const Shop = lazy(() => import("./pages/Shop/index.js"));
const SignIn = lazy(() => import("./pages/SignIn/index.js"));

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Suspense fallback="Loading...">
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;

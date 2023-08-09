import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Profile, Settings, Projects } from "./pages/index";
import { Courses, Friends, Files, Plans } from "./pages/index";
import { Provider } from "react-redux";
import store from "./redux/store";
import MainContext from "./context/mainContext";
import { Signin, Signup, Forget, Guest } from "./pages/index";
import File from "./pages/files/data/File";
import Friend from "./pages/friends/data/Friend";

const App = () => {
  return (
    <Provider store={store}>
      <MainContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="/guest" element={<Guest />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/friends/:friend" element={<Friend />} />
            <Route path="/files" element={<Files />} />
            <Route path="/files/:file" element={<File />} />
            <Route path="/plans" element={<Plans />} />
          </Routes>
        </BrowserRouter>
      </MainContext>
    </Provider>
  );
};

export default App;

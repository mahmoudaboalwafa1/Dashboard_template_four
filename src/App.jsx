import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Profile,
  Settings,
  Projects,
  Courses,
  Friends,
  Files,
  Plans,
} from "./pages/index";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ProviderContext } from "./context/mainContext";

const App = () => {
  return (
    <Provider store={store}>
      <ProviderContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/files" element={<Files />} />
            <Route path="/plans" element={<Plans />} />
          </Routes>
        </BrowserRouter>
      </ProviderContext>
    </Provider>
  );
};

export default App;

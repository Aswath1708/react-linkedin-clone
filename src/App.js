import "./styles/App.css";
import LoginPage from "./components/pages/authentication/LoginPage";
import SignUp from "./components/pages/authentication/SignUp";
import { Navbar } from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { Me } from "./components/navlinks/Me";
import PageNotFound from "./components/pages/PageNotFound";
import AccountHome from "./components/home/Account/AccountHome";
import { MyNetwork } from "./components/navlinks/MyNetwork";
import { Jobs } from "./components/navlinks/Jobs";
import { Messaging } from "./components/navlinks/Messaging";
import { Notifications } from "./components/navlinks/Notifications";
import { Home } from "./components/navlinks/Home";
import { Premium } from "./components/navlinks/Premium";
import UserProfile from "./components/pages/userProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home/*" element={<Navbar />}>
          <Route path="feed/*" element={<Home />} />
          <Route path="my-network" element={<MyNetwork />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="messages" element={<Messaging />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="me" element={<Me />} />
          <Route path="account" element={<AccountHome />} />
          <Route path="feed/account" element={<AccountHome />} />
          <Route path="in/:id" element={<UserProfile />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

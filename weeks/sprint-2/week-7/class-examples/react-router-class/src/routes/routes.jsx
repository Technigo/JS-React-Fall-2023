import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { MyInfo } from "../components/MyInfo";
import { NotFoundPage } from "../components/NotFoundPage";
import { SongInfo } from "../components/songs/SongInfo";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/info" element={<MyInfo />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/song/:songTitle" element={<SongInfo/>} />
  </Routes>
);

export default routes;

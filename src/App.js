import { Route, Routes } from "react-router-dom";
import "./App.css";
import Slider from "./component/Slider";
import Home from "./component/Home";
import Accordion from "./component/Accodion/Accordion";
import PageNotFound from "./component/PageNotFound";
import Todo from "./component/Todo";
import TabsList from "./component/TabsList";
import Pagination from "./component/Pagination";
import TrafficLight from "./component/TrafficLight";
import Star from "./component/StarRating";
import Calculator from "./component/Calculator";
import { Box } from "@mui/material";
import Layout from "./layout";
function App() {
  return (
    <Box>
      <Layout>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Slider />} path="/slider" />
          <Route element={<Accordion />} path="/accodian" />
          <Route element={<Todo />} path="/todo" />
          <Route element={<TabsList />} path="/tabs" />
          <Route element={<Pagination />} path="/pagination" />
          <Route element={<TrafficLight />} path="/traffic" />
          <Route element={<Star />} path="/rating" />
          <Route element={<Calculator />} path="/calculator" />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </Box>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Slider from "./component/Slider";
import Home from "./pages/Home";
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
import Search from "./component/Search";
import Debounced from "./component/Debounce";
import Checkbox from "./component/CheckBox";
import Circle from "./component/Circle";
import CustomeProgress from "./component/CustomeProgress";
import Otp from "./component/OTP";
import ChipsInput from "./component/ChipsInput";
import NestedCheckBox from "./component/NestedCheckBox";
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
          <Route element={<Search />} path="/search" />
          <Route element={<Debounced />} path="/debounce" />
          <Route element={<Checkbox />} path="/checkbox" />
          <Route element={<Circle />} path="/circle" />
          <Route element={<CustomeProgress />} path="/progress-bar" />
          <Route element={<Otp />} path="/otp" />
          <Route element={<ChipsInput />} path="/chips" />
          <Route element={<NestedCheckBox />} path="/nested-checkbox" />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </Box>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
// layout
import Layout from "../shared/layout";
// Homepage
import Homepage from "../pages/homepage/homepage";

const AllRoutes = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Layout>
    </>
  );
};
export default AllRoutes;

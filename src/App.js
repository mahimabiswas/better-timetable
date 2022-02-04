import { Routes, Route } from "react-router-dom";
import Admin from 'components/admin';
import TimeTable from 'components/timetable';
import Layout from './components/layout';
import Notice from "components/notice";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="dashboard" element={<Admin />} />
          <Route path="timetable" element={<TimeTable />} />
          <Route path="notice" element={<Notice />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

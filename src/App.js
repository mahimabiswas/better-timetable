import { Routes, Route } from "react-router-dom";
import Admin from 'components/admin';
import TimeTable from 'components/timetable';
import Layout from './components/layout';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/timetable" element={<TimeTable />} />
          <Route path="dashboard" element={<Admin />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

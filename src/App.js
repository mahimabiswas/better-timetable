import { Routes, Route } from "react-router-dom";
import Admin from 'components/admin';
import TimeTable from 'components/timetable';
import Layout from './components/layout';
import Notice from "components/notice";
import Account from "components/account";
import Settings from "components/settings";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="dashboard" element={<Admin />} />
          <Route path="/" element={<TimeTable />} />
          <Route path="timetable" element={<TimeTable />} />
          <Route path="notice" element={<Notice />} />
          <Route path="account" element={<Account />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

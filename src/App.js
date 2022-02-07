import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from 'shared/layout';
import Admin from 'page/admin';
import TimeTable from 'page/timetable';
import Notice from "page/notice";
import Account from "page/account";
import Settings from "page/settings";
import setTheme from "util/theme";

function App() {
  useEffect(() => {
    setTheme();
  });
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

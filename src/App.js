import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route exact path="/" children={<TimeTable />} />
          <Route path="/dashboard" children={<Admin />} />
          <Route path="/timetable" children={<TimeTable />} />
          <Route path="/notice" children={<Notice />} />
          <Route path="/account" children={<Account />} />
          <Route path="/settings" children={<Settings />} />
        </Switch>
      </Layout >
    </>
  );
}

export default App;

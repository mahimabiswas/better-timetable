import Header from './components/header';
import SideNav from './components/sidenav';
import TimeTable from './components/timetable';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ display: 'flex' }}>
        <SideNav />
        <TimeTable />
      </main>
    </div>
  );
}

export default App;

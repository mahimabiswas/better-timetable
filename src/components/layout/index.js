import Header from '../header';
import SideNav from '../sidenav';
import './styles.scss';
export default function Layout({ children }) {
    return (
        <div className="app">
            <Header />
            <SideNav />
            {children}
        </div>
    )
}
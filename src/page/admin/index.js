import { Routes, Route } from "react-router-dom";
import Main from "./main";
import Program from "./program";

export default function Admin() {
    // let { path } = useRouteMatch();
    return (
        <>
            hi
            <Routes>
                <Route path={'/dashboard'}>
                    <Main />
                </Route>
                <Route exact path={`/:program`}>
                    <Program />
                </Route>
            </Routes>
        </>
    )
}
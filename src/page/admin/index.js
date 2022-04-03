import { Switch, Route, useRouteMatch } from "react-router-dom";
import Main from "./main";
import Program from "./program";
import Scheduler from "./program/scheduler";
import Staff from "./staff";

export default function Admin() {
    let { path } = useRouteMatch();

    return (
        <>
            <Switch>
                <Route exact path={path}>
                    <Main />
                </Route>
                <Route path={`${path}/staff/:staffId`}>
                    <Staff />
                </Route>
                <Route path={`${path}/staff`}>
                    <Staff />
                </Route>
                <Route path={`${path}/:program/:batch`}>
                    <Scheduler />
                </Route>
                <Route path={`${path}/:program`}>
                    <Program />
                </Route>
            </Switch>
        </>
    )
}
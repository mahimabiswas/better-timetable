import { Switch, Route, useRouteMatch } from "react-router-dom";
import Main from "./main";
import Program from "./program";

export default function Admin() {
    let { path } = useRouteMatch();

    return (
        <>
            <Switch>
                <Route exact path={path}>
                    <Main />
                </Route>
                <Route path={`${path}/:program`}>
                    <Program />
                </Route>
            </Switch>
        </>
    )
}
import React from 'react';
import ReactDOM from 'react-dom';
import TestContainer from "./components/testComponent/container/TestContainer";
import {Provider} from "react-redux";
import {store} from "./redux-store/store";

ReactDOM.render(
    <Provider store={store}>
        <TestContainer/>
    </Provider>,
    document.getElementById('root')
);

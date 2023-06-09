import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Favorite} from "./components/favorite/Favorite";
import {Main} from "./components/main/Main";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Error from "./error";
import {Provider} from "react-redux";
import {store} from "./redux";
import {Personal} from "./components/personal/Personal";


const router = createBrowserRouter([
    {
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Main/>,
            },
            {
                path: "/favorite",
                element: <Favorite/>,
            },
            {
                path: "/personal",
                element: <Personal/>,
            },
        ]
    },
]);


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

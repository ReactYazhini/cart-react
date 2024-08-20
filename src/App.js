import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar/navbar";
import About from "./components/About";
import Error from "./components/Error";
import Productlistcontainer from "./components/productListContainer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProductInnerpage from "./components/ProductInnerpage";
// import Lasyloading from "./components/lazyloading";
import Shimmerui from "./components/shimmer";
import UserContext from "./Utils/UserContext";
import appStore from "./Utils/appStore";
import {Provider} from "react-redux"
import Cart from "./components/Cart";

const Lasyloading = lazy(() => import("./components/lazyloading"));

//  pure js Hello Word
// const header = document.createElement('h1');
// header.innerHTML='Hello World';

// const root = document.getElementById('root');
// root.appendChild(header);
//  Ended pure js Hello Word

// React Start - Core

// For single line DOM Of Object creation
// const heading = React.createElement('h1',{class:'text-success'},'Test React');

// For Below UI DOM Of Object creation
/* <div id="parent">
    <div id="child">
        <h1>I'm h1</h1>
        <h2>I'm h2</h2>
    </div>
    <div id="child">
        <h1>I'm h1</h1>
        <h2>I'm h2</h2>
    </div>
</div> */
// const heading = React.createElement('div',{id:'parent'},
//     [React.createElement('div',{id:'child1'},[
//         React.createElement('h1',{id:'child1_h1'},"I'm h1 tag"),
//         React.createElement('h2',{id:'child1_h2'},"I'm h2 tag"),
//     ]),
//     React.createElement('div',{id:'child2'},[
//         React.createElement('h1',{id:'child2_h1'},"I'm h1 tag"),
//         React.createElement('h2',{id:'child2_h2'},"I'm h2 tag"),
//     ])
// ]
// );

// JSX Code Started
// For React Element - single line Element
// const jsxHeading = <h1 className="text-success">This content from JSX</h1>;

// For React Element - Container
// const jsxContainer = (<div><h1 className="text-success">This content from JSX Container</h1>
// <h2>Test</h2></div>);

// For React Component
const App = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      loggedInUser: "testUser",
    };
    setUserName(data.loggedInUser);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName,setUserName }}>
      <div>
        {/* <UserContext.Provider value={{loggedInUser:"SY",setUserName}}> */}
        <div className="sticky top-0 z-[9999]">
        <Navbar />
        </div>
        {/* </UserContext.Provider> */}
        <Outlet />

        {/* <Banner />
        <Productlistcontainer /> */}  
      </div>
    </UserContext.Provider>
    </Provider>
  )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Productlistcontainer />,
      },
      {
        path: "/Products",
        element: (
          <Suspense fallback={<Shimmerui />}>
            <Lasyloading />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resturants/:resId",
        element: <ProductInnerpage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

// const Component2 = () =>(<div><Component1/><h1 className="text-3xl text-sky-700">This content from Component2</h1>
// <button class="text-white  px-6 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-red-400 mb-12">...</button>

// <div class="pl-4">
//   This text has padding of 1.5rem (24px) on the left side.
// </div>

// <div dir="rtl" class="ps-4  pe-0  ">
//   This text has padding of 1.5rem (24px) on the leading side (right side in RTL).
// </div>

// </div>);

// console.log(<App/>)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

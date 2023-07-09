import React from 'react';
import {createRoot} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from "./chapter_03/Library";
import Clock from "./chapter_04/Clock";
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList";

const root = createRoot(document.getElementById("root"));

// Chapter 4
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

// Chapter 5
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// )

// Chapter 6
root.render(
  <React.StrictMode>
    <NotificationList/>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

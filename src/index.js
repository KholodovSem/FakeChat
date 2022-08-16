import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { App } from 'App';
import './index.css';
import 'modern-normalize/modern-normalize.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


const history = [
  {
    id: 1,
    name: "Alice Freeman",
    messages: [
      {
        textMessage: 'Hey, how are you?',
        date: "15.08.2020",
        time: "10:59AM"
      },
      {
        textMessage: "Good. I am fine, too.",
        date: "15.08.2020",
        time: "11:19AM"
      },
    ]
    ,
  },
];

const myMessage = [
  {
    id: 2,
    toId: 1,
    name: "Sem Kholodov",
    messages: [
      {
        textMessage: 'I\'m fine, are you?',
        date: "15.08.2020",
        time: "11:10AM"
      }
    ]
  }
]

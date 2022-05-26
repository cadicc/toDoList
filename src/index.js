import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ToDoList from './toDoList.js'
import Header from './Header'
import reportWebVitals from './reportWebVitals';
import {StoreProvider} from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <div className="background">
        <div className='container' style={{paddingTop: '200px', paddingBottom:'200px'}}>
          <div className="body">
          <h3 className='title'>Việc cần làm trong ngày hôm nay của bạn là gì?</h3>
            <StoreProvider>
              <ToDoList />
            </StoreProvider>
          </div>
        </div>
      </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

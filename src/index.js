import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // App.js를 임포트
import reportWebVitals from './reportWebVitals'; // 웹 비탈리티 측정을 위한 코드

// 애플리케이션을 'root'라는 id를 가진 div에 렌더링합니다.
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root') // 이 부분이 HTML에서 id가 'root'인 요소에 렌더링됩니다.
);

// 웹 비탈리티 측정을 원한다면 아래 코드를 활성화하세요
reportWebVitals();

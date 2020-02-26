import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import potato from "./Potato";  이렇게 하면 오류가 난다!!
// React app은 하나의 component만을 rendering해야 한다!! 여기서는 App!!

ReactDOM.render(<App />, document.getElementById('potato'));
//<App /> React의 핵심 'jsx' : javaxcript와 html을 섞어서 쓰는 것!!
//React는 Componenet와 함께 동작한다. HTML을 반환하는 함수!!

//index.html에 ID가 root인 div태그에 접근해서 추가해주는 방식!!
//index.html에서 div태그의 ID를 수정하면 오류가 난다.

//App.js component를 ID를 통해 넣어주는 방식이야
//Index.html소스코드를 보면 App.js의 hello가 들어가 있지 않아. 
//React는 소스코드에 처음부터 html을 넣지 않고, html을 따로 추가, 제거한다.
//빈 html을 로드하고 react가 나중에 component를 밀어넣는 방식이라 빠른 것이다!
//virtual DOM을 통해서 html에는 존재하지 않지만 따로 넣어주는거야!!
//App.js에서 우리의 작업을 해주면 알아서 나중에 추가되는 것!!

//   Local:            http://localhost:3000        
//   On Your Network:  http://10.210.96.220:3000    
//  위의 네트워크 주소는 같은 네트워크(WiFi)에서만 접속 가능하다!!


import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [strings, string_modify] = useState(['Personal Info', 'Tech Blogs', 'CP']);  //a 에는 변수, b 는 데이터를 변경하는 함수 
  //ES6 Destructuring //스테이트는 변경되면 HTML 이 자동 재랜더링 됩니당. 개꿀띠

  return (
    <div className="App">
      <div className="black-nav">
        <div>def Leo_Dohwee_Kim(): </div>
      </div>
    
      <div className="list">
        <h3> { strings[0] } </h3>
        <p> last updated : Apr 8th 2021 </p>
        <hr/>
      </div>

      <div className="list">
        <h3> { strings[1] } </h3>
        <p> last updated : Apr 8th 2021 </p>
        <hr/>
      </div>

      <div className="list">
        <h3> { strings[2] } </h3>
        <p> last updated : Apr 8th 2021 </p>
        <hr/>
      </div>

      <div className="list">
        <h5> "Software and cathedrals are much the same – first we build them, then we pray." </h5>
        <p> Sam Redwine </p>
      </div>

    </div>
  );
}

export default App;

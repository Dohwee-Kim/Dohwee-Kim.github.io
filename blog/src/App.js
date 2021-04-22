import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [strings, string_modify] = useState(['Personal Info', 'Tech Blogs', 'CP']);  //a 에는 변수, b 는 데이터를 변경하는 함수 
  //ES6 Destructuring //스테이트는 변경되면 HTML 이 자동 재랜더링 됩니당. 개꿀띠
  let [likes, likes_modify] = useState(0); // 위에 import 하는거 잊으면 안됨, likes_modify 는 변경용 함수, [state, state_modify_func] // re-render

  function change_the_middle_string() {
    var newArray = [...strings] // copy the state, deep copy    ...은 중괄호 대괄호 다 제거해 주세요 라는 문법
    newArray[1] = 'Software Engineer';  // then modify it 
    string_modify(newArray); //then push it 
  }

  function liked_handler() {
    var newArray =[...strings] ;
    newArray[0] = 'Thanks for the Like ! ';
    string_modify(newArray)

    likes_modify(likes + 1)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>def Leo_Dohwee_Kim(): </div>
      </div>
    
      <div className="list">
        <h3> { strings[0] } <span onClick={ liked_handler }>👍</span> {likes} </h3>
        <p> last updated : Apr 21st 2021 </p>
        <hr/>
      </div>

      <div className="list">
        <h3> { strings[1] } <button onClick={ change_the_middle_string }> Who Am I ?</button></h3>
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

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [strings, string_modify] = useState(['Personal Info', 'Tech Blogs', 'CP']);  //a 에는 변수, b 는 데이터를 변경하는 함수 
  //ES6 Destructuring //스테이트는 변경되면 HTML 이 자동 재랜더링 됩니당. 개꿀띠
  let [likes, likes_modify] = useState(0); // 위에 import 하는거 잊으면 안됨, likes_modify 는 변경용 함수, [state, state_modify_func] // re-render

  let [modal, modal_modify] = useState(false);

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

  function render_modal() {
    if (modal === true) {
      modal_modify(false)
    } else{
      modal_modify(true)
    }
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
        <h5> "Software and cathedrals are much the same – first we build them, then we pray." <span onClick={render_modal}>🙏</span> </h5>
        <p> Sam Redwine </p>
      </div>

    
      {
        modal === true ? <Modal/> : null 
      }
      

    </div>
  );
}

function Modal() {   //리액트의 component 라는 문법 , function 이름 짓고 
  return (
    <div className="modal">  
        <h2>Title</h2>
        <p>Date</p>
        <p>Contents</p>
      </div>
  );  //원하는 HTML 담은 다음에 위에가서 시밤쾅
}

export default App;

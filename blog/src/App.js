import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [strings, string_modify] = useState(['Personal Info', 'Projects portfolio', 'Certificates', 'About me']);  //a 에는 변수, b 는 데이터를 변경하는 함수 
  
  //ES6 Destructuring //스테이트는 변경되면 HTML 이 자동 재랜더링 됩니당. 개꿀띠
  let [likes, likes_modify] = useState(0); // 위에 import 하는거 잊으면 안됨, likes_modify 는 변경용 함수, [state, state_modify_func] // re-render

  let [modal, modal_modify] = useState(false);

  const project_btn_clicked = () => {
    window.open('https://github.com/Dohwee-Kim', '_blank');
  }

  function liked_handler() {
    let newArray =[...strings] ;//수정된 데이터 복사본을 만듬 
    newArray[0] = 'Thanks for the Like ! '; 
    string_modify(newArray)   // 그 다음 덮어씌움

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
        <p> last updated : Jan 18 2022 </p>
        <hr/>
      </div>

      <div className="list">
        <h3> { strings[1] } <button onClick={ project_btn_clicked }> See </button></h3>
        <p> last updated : Jan 18 2022 </p>
        <hr/>
      </div>

      <div className="list">
        <h3> { strings[2] } </h3>
        <p> last updated : Jan 18 2022 </p>
        <hr/>
      </div>

      <div className="list">
        <h3> { strings[3] } </h3>
        <p> last updated : Jan 19 2022 </p>
        <hr/>
      </div>

      <div className="list">
        <h5 style = { {color : 'blue', fontSize: '20px' }}> "Software and cathedrals are much the same – first we build them, then we pray." <span onClick={ ()=>{ modal_modify(!modal)}}>🙏</span> </h5>
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
        <h2>React Modal</h2>
        <p>Date</p>
        <p>Contents</p>
      </div>
  );  //원하는 HTML 담은 다음에 위에가서 시밤쾅
}


export default App;

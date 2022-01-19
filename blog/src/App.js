import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [strings, string_modify] = useState(['Personal Info', 'Projects portfolio', 'Certificates', 'About me']);  //a 에는 변수, b 는 데이터를 변경하는 함수 

  let [ resume_title , resume_title_modify ] = useState(['DOHWEE (LEO) KIM']);
  let [ resume_display, resume_display_modify] = useState(false);

  //ES6 Destructuring //스테이트는 변경되면 HTML 이 자동 재랜더링 됩니당. 개꿀띠
  let [likes, likes_modify] = useState(0); // 위에 import 하는거 잊으면 안됨, likes_modify 는 변경용 함수, [state, state_modify_func] // re-render

  let [modal, modal_modify] = useState(false);

  function change_the_middle_string() {
    let newArray = [...strings] // copy the state, deep copy    ...은 중괄호 대괄호 다 제거해 주세요 라는 문법
    if (newArray[1] === 'Sorry ! Underconstruction !'){
      newArray[1] = 'Projects portfolio';  // then modify it 
    }
    else {
      newArray[1] = 'Sorry ! Underconstruction !';  // then modify it 
    }
    
    string_modify(newArray); //then push it 
  }

  function liked_handler() {
    let newArray =[...strings] ;
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

  function display_resume() {
    return ({})
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
        <h3> { strings[1] } <button onClick={ change_the_middle_string }> See </button></h3>
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
        <button onClick = { ()=> { resume_display_modify(!resume_display)}}>Resume</button>
        {
          resume_display === true ? <resumeModal resume_title= {resume_title}/> : null
        }
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

// props -> 는 전해져 오는 props 를 다 담고있는 object 
function resumeModal(props) {
  return (
    <div className="resume_modal">
      <h2>{props.resume_title[0]}</h2>
      <p>날씨</p>
      <p>상세</p>
    </div>
  );
}

export default App;

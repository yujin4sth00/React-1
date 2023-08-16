import { useEffect, useRef, useState } from 'react';
import './App.css';
import JsxEx from './components/JsxEx';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Controller from './components/Controller';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

function App(){

  //state 변수
  const [title, setTitle] = useState('WEB');
  const [sub, setSub] = useState('World Wide Web');
  const [subject, setSubject] = useState(
    {title:'WEB', sub:'World Wide Web'}
    );
  //Nav 컴포넌트를 위한 변수 선언
  const [contents, setContents] = useState(
    [
      {id:1, title:'HTML', desc:'HTML is for information'},
      {id:2, title:'CSS', desc:'CSS is for Design'},
      {id:3, title:'Javascript', desc:'Javascript is for Interactive'},
    ]
  )

  const [mode, setMode] = useState('read');
  const [welcome, setWelcome] = useState({
    title:'Welcome', desc:'Welcome React!'
  })
  //어떤 항목이 선택이 되었는지를 저장하는 변수
  const[selectedId, setSelectedId] = useState(0);
  //contents의 id값이 중복되는 경우를 제거하고자 id 값을 계속 저장하여 유지하고자 useRef() 이용하여 선언함
  //useRef)로 변수 선어시에, 리렌더링이 되더라도 값이 계속 유지됨
  //일반 변수로 선언시에는, 리렌더링이 되면, 값이 리셋됨
  const idInc = useRef(10);

  let _title, _desc = null;
  //데이터 처리가 추가되면서, 변수 _article 컴포넌트를 저장하여 출력
  let _article = null;

  const getReadContent=()=>{
    let i=0;
    let data=null;
    while(i<contents.length){
      data=contents[i];
      if(contents[i].id == selectedId){
        break;
      }
      i ++;
    }
    return data;
  }

  if(mode === 'read'){
    let i=0;
    while(i<contents.length){
      if(contents[i].id == selectedId){
        _title=contents[i].title;
        _desc=contents[i].desc;
        break;
      }
      i ++;
    }
    _article = <Article title={_title} desc={_desc}></Article>
  }
  else if(mode === 'welcome'){
    _title=welcome.title;
    _desc=welcome.desc;
    _article= <Article title={_title} desc={_desc}></Article>
  }
  else if(mode === 'create'){
    _article=<CreateContent onSubmit={(_title, _desc)=>{
      //CreateContent 에서 넘어오는 title, desc 체크
      console.log(_title,_desc);
      //새로 입력된  title, desc 추가
      let max_content_id = idInc.current;
      idInc.current ++;

      setContents([
        //기존 배열 요소
        ...contents,
        //새로 추가되는 배열 요소
        {
          id: max_content_id,
          title: _title,
          desc: _desc
        }
      ])
    }}></CreateContent>
  }
  else if(mode === 'update'){
    //선택한 데이터를 가져옴(기존 데이터를 보고 수정 예정)
    let _content=getReadContent();
    _article=<UpdateContent data={_content} onSubmit={(_title, _desc)=>{
      //수정된 데이터 확인
      console.log(`(수정된 데이터) ${_title}, ${_desc} `);
      //수정된 데이터를 contents 배열 요소에 업데이트
      let i=0;
      while(i<contents.length){
        if(contents[i].id == selectedId){
          contents[i].title=_title;
          contents[i].desc=_desc;
          break;
        }
        i ++;
      }
      //
    }}></UpdateContent>
  }
  else if(mode === 'delete'){
    console.log('delete : selectedId : ' + selectedId);
    if(window.confirm('Really delete ??')){
      let i=0;
      while(i<contents.length){
        if(contents[i].id ==selectedId){
          contents.splice(i,1);
          break;
        }
        i++
      }
    }
    setContents(contents);
    setMode('Welcome');
  }

  return(
    <div>
      {/* <Header title={title} sub={sub} /> */}
      <Header title = {subject.title} sub={subject.sub} onChangePage={() => {
        setMode('welcome');
      }} />
      {/* <Header title = 'React' sub='UI Libary' /> */}
      <Nav data={contents} onChangePage={(id)=> {
        setMode('read');
        setSelectedId(id);
      }}></Nav>
      <Controller onChangeMode={(mode)=>{
        setMode(mode);
      }}></Controller>
      {_article}
    </div>
  )
}

function App_Hooks() {
  let cntVar = 0;
  //useState() 이용하여 변수 선언
  const [count, setCount] = useState(0);
  const [mode, setmode] = useState('true');
  const countRef = useRef(0);
  const inputRef = useRef();

  console.log(' 렌더링 == ' + count);
  console.log(' 렌더링 == ' + mode);

  //useEffect(기능,) - 매번 렌더링 될때마다 실행됨
  //useEffect(,[변수]) - 변수의 변화에 대해서만 useEffect()가 실행됨
  //useEffect(기능,[]) - 처음 렌더링될때만 실행됨
  useEffect(() => {
    console.log('useEffect 실행됨');
  },[]);

  return (
      <div className="App">
          <p> clock counts(let) : {cntVar}</p>
          <p> clock counts(useState) : {count}</p>
          <p> click mode(useState) : {mode} </p>
          <p> click countRef(useRef) : {countRef.current} </p>

          <button onClick={() => {
            cntVar ++;
            console.log('countVar : ' + cntVar);
          }}>click me</button>
          <br/>

          <button onClick={() => {
            setCount(count+1);
            console.log('count : '+ count);
          }}>click me(useState)</button>

          <br/>

          <button onClick={() => {
            mode === 'true' ? setmode('false'):setmode('true');
          }}>click mode(useState)</button>

          <br/>
         
          <button onClick={() => {
            countRef.current = countRef.current + 1;
            //값의 변화가 있지만 , 렌더링을 통해서 출력이 되지 않음
            console.log('countRef : ' + countRef.current);
          }}>click countRef(useRef)</button>

          <br/>
          <h2> useRef 연습</h2>
          <input ref={inputRef} type = "text" placeholder='username'></input>
          <br/>
          <button onClick={() => {
            console.log(inputRef); //어디에 저장되는 지 알고 싶어서 작성한 코드
            alert('Welcome ' + inputRef.current.value);
          }}> 제출 (useRef)</button>

          <h2> preventDefault 연습 </h2>
          <p>
            <a href='http://localhost:3000/' onClick={(e) =>{
              e.preventDefault();
              setCount(count+1);
          }}> click count(useState, a tag) </a>
          </p>

      </div>
  );
}


function App_ex(){
  return(
    <div>
      <JsxEx></JsxEx>
    </div>
  )
}
export default App;

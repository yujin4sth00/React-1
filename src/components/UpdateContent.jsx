import { useState } from "react";

const UpdateContent = (props)=>{
    //기존 데이터를 state 변수에 저장
    const [title, setTitle] = useState(props.data.title);
    const [desc, setDesc] = useState(props.data.desc);

    return(
        <div>
            <article>
                <h2> Update (데이터 수정) </h2>
                <form action ="/update_process" method="post" onSubmit={(e)=>{
                    e.preventDefault();
                    props.onSubmit(
                        e.target.title.value,
                        e.target.desc.value
                    )
                    
                }}>
                <p>
                    <input type="text" name="title" 
                    //input태그의 초기치는 value 속성 설정
                    value={title} onChange={(e)=>{
                        setTitle(e.target.value);
                    }}></input>
                </p>
                <p>
                    <input type="text" name="desc" value={desc} onChange={(e)=>{
                        setDesc(e.target.value);
                    }}></input>
                </p>
                <p>
                    <input type="submit" value="제출"></input>
                </p>
                </form>
            </article>
        </div>
    )
}

export default UpdateContent;
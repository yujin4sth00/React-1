const CreateContent = (props)=>{
    return(
        <div>
            <article>
                <h2> Create (데이터 생성) </h2>
                <form action="/create_process"
                method="post"
                onSubmit={(e)=>{
                    e.preventDefault();
                    props.onSubmit(
                        e.target.title.value,
                        e.target.desc.value
                        )
                    //데이터 저장 후에, 입력창을 지움
                    e.target.title.value='';
                    e.target.desc.value='';
                }}
                >
                <p>
                    <input type="text" name="title" placeholder="title"/>
                </p>
                <p>
                    <input type="text" name="desc" placeholder="description"/>
                </p>
                <p>
                    <input type="submit" value="제출" />
                </p>
                </form>
            </article>
        </div>
    )
}

export default CreateContent;
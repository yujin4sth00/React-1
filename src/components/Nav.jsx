const Nav = (props) => {
    //출력을 위한 전처리 작업
    const list = props.data.map((content) => {
        return(
            <li key={content.id}>
                <a href={content.id} data-iddd ={content.id} 
                    onClick={(e)=>{
                        e.preventDefault();
                        console.log(e);
                        console.log(e.target.dataset.iddd);
                        //console.log(e.target.dataset.iddd);로 사용할 거면 밑에 props.onChangePage(content.id);를 지우고 props.onChangePage(e.target.dataset.iddd); 사용 <a href={content.id} data-id ={content.id} 에서도 data-iddd로 바꿔주기(윗 코드) 
                        //props.onChangePage(content.id);
                        props.onChangePage(e.target.dataset.iddd);
                }}>{content.title} </a>
            </li>
        )
    })

    return(
        <div>
            <nav>
                <ul>
                    {list}                                            
                </ul>
            </nav>
        </div>
    )
}

const Nav_Prev = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">Javascript</a></li>                                              
                </ul>
            </nav>
        </div>
    )
}
//외부파일에서 사용할 수 있도록 export 해줌
export default Nav;
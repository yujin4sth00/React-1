
const Header = (props) => {
    return(
        <div>
            <header>
                <h1>
                    <a href="#" onClick={(e)=> {
                        e.preventDefault();
                        //mode를 read->welcome 으로 바꿔줌
                        props.onChangePage();
                    }}>{props.title} </a>
                </h1>
                <p>{props.sub}</p>
            </header>
        </div>
    )
}

export default Header;
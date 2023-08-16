const Article = (props) => {
    return(
        <div>
            <article>
                <h2> {props.title} </h2>
                <p> {props.desc}</p>
            </article>
        </div>
    )
}

export default Article;
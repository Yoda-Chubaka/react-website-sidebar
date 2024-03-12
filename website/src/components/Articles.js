function Articles(props) {

    const definitions = props.data;
    // console.log(props);

    return (
        <>
            {definitions.map((item, idx) =>
                <section key={idx}>
                    <h2>{item.title}</h2>
                    <div>
                        <p>{item.body}</p>
                    </div>
            </section>)}
        </>
    )
};

export default Articles;
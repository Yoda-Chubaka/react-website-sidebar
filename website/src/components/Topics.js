function Topics(props) {

    const definitions = props.data;
    // console.log(props);

    return (
        <>
            <ul>
            {definitions.map((item, idx) =>
                <li key={idx}>
                    {/* <h2>{item.title}</h2> */}
                    <div>
                        <a href={item.href}><li>{item.title}</li></a>
                    </div>
                </li>)}
            </ul>
        </>
    )
};

export default Topics;
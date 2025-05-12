import './assets/css/header.css'

function Header(props) {

    let { } = props
    console.log("ini adalah props", props.products[0].name)

    return (
        //di kasih html = jsx
        <>
            <h1 className='background-aqua container'>ini Header {props.list[0]}</h1>
            <p>tampilan : {name} </p>
            <>
                {/* <ol>
                    {props.list.map((list, index) => (
                        <li key={index}> {list} </li>
                    ))}
                </ol> */}
                <ul>
                    {/* {props.products.map((product, index) => (
                        <li key={index}> {product.category} </li>
                    ))} */}
                    {/* {props.products.map((product, index) => (
                        <li key={index}>{product.price}</li>
                    ))}; */}

                </ul>
            </>

            {/* <h1 className='background-aqua container'>ini umur {props.age}</h1> */}
            <hr />
        </>
        // <ButtonLogin />
    );
}

export default Header;
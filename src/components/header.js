
function Header (props) {
    return(
        <div>
            <h1>{props.item.Name}</h1>
            <p>{props.item.Description}</p>
        </div>
    )
}
export default Header
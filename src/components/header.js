import memeImage from '../images/trollface.0.png'
import '../style.css'


function Header (props) {
    return(
        <>
            <div className="container-fluid headerContainer p-4 ">
                <div className="row d-flex justify-content-around">
                    <div className="col-4 d-flex">
                        <img className='trollImage' src={memeImage} alt="" />
                        <p className='p-0 m-0 my-auto heading text-white mx-2'>Meme Generator</p>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>  
        </>
    )
}
export default Header
import { useEffect, useState } from "react"
import React from "react"
import '../style.css'
function Meme (props) {
   let [meme, setMeme] = useState({
    topText : '',
    bottomText : '',
    imgUrl : ''
   })
   function generateText(event){
    const {name, value} = event.target
    setMeme(prevData => {
        return {
            ...meme,
            [name] : value
        }
   })
   } 
   const [memeApi, setMemeApi] = useState({})
   console.log(memeApi);
   let [randomNum, setRandomNum] = useState(1)
   useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then( res => res.json())
    .then( data => setMemeApi(data.data.memes))
   },[randomNum])
   function generateMeme(){
    setRandomNum(Math.floor(Math.random() * memeApi.length))
    setMeme(prevMeme => {
        return{
            ...meme, imgUrl : [memeApi[randomNum].url]
        }
    })
   }
   
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 d-flex my-5'>
                        <input name="topText" value={meme.topText} onChange={generateText} className='form-control p-2 mx-2' placeholder='Top Writing' />
                        <input name="bottomText" value={meme.bottomText}  onChange={generateText} className='form-control p-2 mx-2' placeholder='Bottom Writing' />
                    </div>
                    <div className='col-12 d-flex'>
                        <input onClick={generateMeme} className='form-control mx-3 p-3  submit text-white' type="submit" value='Get a New Meme Image'/>
                    </div>
                    <div className='col-12 my-2 d-flex justify-content-center'>
                        <div className='col-10 my-3 imageDiv d-flex flex-column justify-content-center'>
                            <img className='imageDiv--image' src={meme.imgUrl} alt=''/>
                            <h2 className="imageDiv--text top">{meme.topText}</h2>
                            <h2 className="imageDiv--text bottom">{meme.bottomText}</h2>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
           
        </>
    )
}
export default Meme
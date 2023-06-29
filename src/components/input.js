import React from "react"       


function Inputs(){

    const [meme, setMemeData]= React.useState({
        top: "",
        bottom: "",
        memeUrl: ""

    }
    )

    const [allMemes,setAllMemes] = React.useState([])


    // API CALL
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    // console.log(allMemes)
    



    // const [memeImage, setMemeData]= React.useState("")

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setMemeData(
            prevMemes=>({
            ...prevMemes,
            memeUrl: allMemes[randomNumber].url
        }))
    }



    function handleChange(event){
        const {name,value}=event.target
        setMemeData(prevData=>({
            ...prevData,
            [name]: value
        }
        ))
    }

 
    return(
        <div className="meme-inp"> 
            {/* input */}
            <div className="form">
                <input 
                placeholder="Top Text" 
                className="input"
                name="top"
                onChange={handleChange}
                value={meme.top}/>
                <input 
                placeholder="Top Text" 
                className="input"
                name="bottom"
                onChange={handleChange}
                value={meme.bottom}/>
                <button onClick={getMemeImage} >Get a new meme image 🖼</button>
            </div>



            {/* display */}
            <div  className="img-box">
                <div className="top-tag">{meme.top}</div>
                <div className="bottom-tag">{meme.bottom}</div>
                <img src={meme.memeUrl} className="meme--img" alt=""/>
            </div>
            
        </div>
    )
}

export default Inputs
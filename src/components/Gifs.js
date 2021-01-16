import React, {useState} from 'react'

const DifferentGif = [
    "https://media3.giphy.com/media/RmrRlZ32jZJdl6afOt/giphy.gif?cid=ecf05e475af8jo80eh46nj9skthzamxqew8hzszgj0fb9fa8&rid=giphy.gif"
  ]
  
  const OtherGif = [
    "https://media0.giphy.com/media/3oFzma6qk0eOsdbKEw/giphy.gif?cid=ecf05e47bu6dwx2q2xhdyxg4yn16xe7dgs3246dk5z09pagf&rid=giphy.gif"
  ]

export default function Gifs() {

    const [ gif , setGif] = useState(OtherGif)

    return (
    <content className="App-content">
        <p className="App-title">
            Página de Gifs
        </p>
        <div>
            <img src={gif}></img>
            <img src = 'https://media2.giphy.com/media/5pUIK6bduG7WklApgB/giphy.gif?cid=ecf05e4762embvgwamkjdnm3luuwwif51t3v4glhrlvwwpkk&rid=giphy.gif'></img>
        </div>
        <div> 
            <button onClick= { () => setGif(DifferentGif)} >Buscar Gifs</button>
        </div>
    </content>
    )
}
import React, {useState} from 'react'
import { BrowserRouter as Router } from "react-router-dom"

const DifferentGif = [
    "https://media3.giphy.com/media/RmrRlZ32jZJdl6afOt/giphy.gif?cid=ecf05e475af8jo80eh46nj9skthzamxqew8hzszgj0fb9fa8&rid=giphy.gif"
  ]
  
  const OtherGif = [
    "https://media0.giphy.com/media/3oFzma6qk0eOsdbKEw/giphy.gif?cid=ecf05e47bu6dwx2q2xhdyxg4yn16xe7dgs3246dk5z09pagf&rid=giphy.gif"
  ]

export default function Gifs() {

    const [ gif , setGif] = useState(OtherGif)

    return (
        <Router>
            <div className="content">
                <p className="Menu-title">
                    Página de Gifs
                </p>
                <div>
                    <img src={gif}></img>
                    <img src = 'https://media2.giphy.com/media/5pUIK6bduG7WklApgB/giphy.gif?cid=ecf05e4762embvgwamkjdnm3luuwwif51t3v4glhrlvwwpkk&rid=giphy.gif'></img>
                </div>
                <div> 
                    <button onClick= { () => setGif(DifferentGif)} >Siguientes</button>
                </div>

                <p className="Menu-title">
                    Más populares                    
                </p>
                <div>
                    <img src='https://media3.giphy.com/media/cJMjx8VOKo1pExQxGH/giphy.gif?cid=ecf05e47xmmprjm22410r3b3zj0udjfl27x53bik39ufxmc7&rid=giphy.gif'></img>
                    <img src = 'https://media0.giphy.com/media/XAZZT1LjsqgTWZpIRQ/giphy.gif?cid=ecf05e47mzq0qzelisltslnayr7shly78zox1vll06si2633&rid=giphy.gif'></img>
                </div>

                <p className="Menu-title">
                    Más recientes
                </p>
                <div>
                    <img src='https://media2.giphy.com/media/JmlpXH9zJMlWZTlWEv/giphy.gif?cid=ecf05e470e5aac4575c015f1d41ddc3594859b7d69f7a779&rid=giphy.gif'></img>
                    <img src = 'https://media1.giphy.com/media/N7IID5EXsENXEprryD/giphy.gif?cid=ecf05e472fjei18djyifmqdw0faj0lukfrcs091h0z3d67f1&rid=giphy.gif'></img>
                </div>
            </div>
        </Router>
    )
}
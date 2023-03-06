import './App.css';
import { useState,useEffect} from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const colorRandom=()=> {
    return `rgb(${Math.floor(Math.random()*256)},
  ${Math.floor(Math.random()*256)},${Math
      .floor(Math.random()*256)})`
    }
    const color=colorRandom()
  const [quotes, setQuotes] = useState({
    quote:"",
    character:"",
    image:""
  })

const fetchData=()=>{
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response=>response.json())
      .then(data=> setQuotes({
        quote:data[0].quote,
        character:data[0].character,
        image:data[0].image
      }))
      

}

  useEffect(() => {
    if(quotes.quote==="")fetchData()
    setTimeout(() => {
      setIsLoading(false);
    }, 800);

  },[])
  
  return (
    <div className="App" style={{backgroundColor:color}}>
        <div id='quote-box'>
          <div>{!isLoading?<img src={quotes.image}/>:<>Loading...</>}</div>

          <div>
            <div id='text'>
              <h2 style={{color:color}}>{quotes.quote}</h2>
              </div>
            <div id='author'>
              <p style={{color:color}}><strong>{quotes.character}</strong></p>
              </div>

            <div className='butonContainer'>

              <div >
                <button id='new-quote' 
                onClick={()=>fetchData()}
                 style={{color:color}}><strong>new quote</strong></button>
                </div>
              <div><a id='tweet-quote' href='https://twitter.com/intent/tweet' target="_blank">go to tweeter</a></div>
            </div>
          </div>


        </div>
    </div>
  );
}

export default App;

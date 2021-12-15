const QUOTE_API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

export let quoteList;

export const mainGrid ={
  minHeight: '100vh'
}

export const quoteStyle = { 
  minHeight: '200px', 
  width: '800px', 
  textAlign:'justify',    
  margin: '20px'
}

export const shadowList =  [
  { 
    borderRadius: '25px', 
    borderStyle: 'solid', 
    boxShadow: '15px 15px 10px 10px rgba(0, 0, 255, .2)'
  },
  { 
    borderRadius: '25px', 
    borderStyle: 'solid', 
    boxShadow: '15px 15px 10px 10px rgba(255, 0, 0, .2)'
  },
  { 
    borderRadius: '25px', 
    borderStyle: 'solid', 
    boxShadow: '15px 15px 10px 10px rgba(0, 255, 0, .2)'
  },
  { 
    borderRadius: '25px', 
    borderStyle: 'solid', 
    boxShadow: '15px 15px 10px 10px rgba(238, 130, 238, .2)'
  },
  { 
    borderRadius: '25px', 
    borderStyle: 'solid', 
    boxShadow: '15px 15px 10px 10px rgba(106, 90, 205, .2)'
  },
  { 
    borderRadius: '25px', 
    borderStyle: 'solid', 
    boxShadow: '15px 15px 10px 10px rgba(60, 60, 60, .2)'
  },
  { 
    borderRadius: '25px', 
    borderStyle: 'solid', 
    boxShadow: '15px 15px 10px 10px rgba(255, 165, 0, .2)'
  },
]

export function fetchQuoteList() {
    fetch(QUOTE_API)
      .then((response) => response.json())
      .then((responseData) => {
        quoteList = responseData.quotes.map( value => ( {
          text : value.quote, 
          author : value.author
        }))
      })
  }

export function getRandomInt(num) {
    return Math.floor(Math.random() * num);
  }

export function getRandomQuote(){
    let index = getRandomInt(102)
    return quoteList[index]
  }

export function getRandomColor(){
    let index = getRandomInt(5)
    return shadowList[index]
  
}
import React from 'react';
import { fetchQuoteList, getRandomColor, getRandomQuote, mainGrid, quoteStyle } from './helpers.js';
import { Quote } from './Quote.js';
import { NewQuoteButton } from './NewQuoteButton.js';
import { TweetButton } from './TweetButton.js';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem'
import Container from '@mui/material/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {
        text: "I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with 'em later.",
        author: "Rares Florin Ionescu"
      },
      gridStyle: { 
        borderRadius: '25px', 
        borderStyle: 'solid', 
        boxShadow: '15px 15px 10px 10px rgba(0, 0, 255, .2)'
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetchQuoteList();
  }

  handleChange() {
    let getQuote = getRandomQuote();
    let shadowColor = getRandomColor();
    this.setState({
      quote: getQuote,
      gridStyle: shadowColor
    });
  }
  
  render() {
    return (      
      <Container fixed id="quote-box" >
        <Grid container direction="column" alignItems="center" justifyContent="center" style={mainGrid} >
          <Grid item xs={12} style={this.state.gridStyle}>
            <Item style={quoteStyle}>
              <Quote quote={ this.state.quote } />
            </Item>
            <Grid container>
              <Grid item xs={6} >
                <Item >
                  <Grid container justifyContent="left" >
                    <TweetButton quote = { encodeURIComponent(this.state.quote.text) } />
                  </Grid>
                </Item>
              </Grid>
              <Grid item xs={6} >
                <Item>
                  <Grid container justifyContent="right" >
                    <NewQuoteButton onButtonClick={ this.handleChange } />
                  </Grid>
                </Item>
              </Grid>
            </Grid> 
          </Grid>
        </Grid> 
      </Container>
    );
  }
};


export default App;

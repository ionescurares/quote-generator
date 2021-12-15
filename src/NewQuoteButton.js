import Button from '@mui/material/Button';

const quoteStyle = {
    color: 'black',
    borderColor: 'black',
    backgroundColor: '#eeeeee',
    borderRadius: '0px',
    margin: '20px'
};

export const NewQuoteButton = (props) => (

    <Button id="new-quote" variant="outlined" onClick = {props.onButtonClick} style = {quoteStyle}>
        NEXT QUOTE
    </Button>  
    
);
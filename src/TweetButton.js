import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';

const TWITTER_HANDLE = 'https://twitter.com/intent/tweet?text='

const twitterStyle = {
    color: 'black',
    borderColor: 'black',
    backgroundColor: '#eeeeee',
    borderRadius: '0px',
    margin: '20px',

};

export const TweetButton = (props) => (

    <Button variant="outlined" href={TWITTER_HANDLE + props.quote} target="_blank" id="tweet-quote" startIcon={<TwitterIcon />} style = {twitterStyle}>
        TWEET
    </Button>   

);
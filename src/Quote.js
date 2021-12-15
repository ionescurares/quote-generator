export const Quote = (props) => (
    <div>
        <h3 id='text'>
            <i>
                {props.quote.text}
            </i>
        </h3>
        <p id='author'>
            - {props.quote.author}
        </p>
    </div>
    
);
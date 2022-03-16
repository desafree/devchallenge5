import { Link } from "react-router-dom";

const Quote = ({quote}) => {
    return ( 
        <div className="quote-container">
            <p className="quote-text">{quote.quoteText}</p>
            
            <Link to={`/author/${quote.quoteAuthor}`}>
                <div>
                    <h5>{quote.quoteAuthor}</h5>
                    
                    <h6>{quote.quoteGenre}</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><rect fill="none" height="24" width="24"/><path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"/></svg>
                </div>
            </Link>

        </div>
     );
}
 
export default Quote;
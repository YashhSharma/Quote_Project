import { useDispatch, useSelector } from "react-redux";

const QuoteBox=()=>{
    const dispatch=useDispatch();
    const quote=useSelector(store=>store.quoteBody)
    const handleQuote=()=>{
    
              fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
                .then(response => response.json())
                .then(data => {
                  dispatch({ type: "FETCH_QUOTE", payload: data[0] });
                })
                .catch(error => {
                  console.error("Error:", error);
                });
    }
    return<>
    <div className="bg-dark text-secondary px-4 py-5 text-center outside-box">
    <div className="py-5">
      
      <div className="col-lg-6 mx-auto quote_data">
        <p className="fs-5 mb-4">{quote}</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" fdprocessedid="tw7uo" onClick={handleQuote}>Get Quote</button>
        </div>
      </div>
    </div>
  </div>
    </>
}
export default QuoteBox;
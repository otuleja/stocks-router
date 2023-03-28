import stocks from "./data";
import { Link } from "react-router-dom";

function Stocks() {
  return (
    <div>
      {stocks.map((stock) => {
        return (
          <li key={stock.symbol}>
            <Link to={`/stocks/${stock.symbol}`}>{stock.name}</Link>
          </li>
        )
      })}
    </div>
  )
}

export default Stocks
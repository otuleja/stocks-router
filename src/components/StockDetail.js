import { useParams } from 'react-router-dom';
import stocks from "./data"
function StockDetail() {
  const params = useParams();
  const id = params.id;
  const stock = stocks.find((stock) => stock.symbol === id);
  return (
    <div>
      <h1>Name: {stock.name}</h1>
      <h4>Price: {stock.price}</h4>
    </div>
  )
}

export default StockDetail
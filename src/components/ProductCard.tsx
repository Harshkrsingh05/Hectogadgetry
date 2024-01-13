import electronicItems from '../../electronicItems.json';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
}
export default function ProductCard() {
  return (
    <>
      <div className='mx-1 row' style={{width:'98vw'}}>
      {electronicItems.electronicItems.map((item: Product) => (
        <div key={item.id} className="product-card border mx-1 my-3 col">
          <Link to={`/product/${item.id}`}>
            <img src={item.image} alt={item.name} style={{width: '200px', height: '200px'}}/>
          <h3>{item.name}</h3>
          <p>${item.price.toFixed(2)}</p>
          <button className='btn my-1 mx-1'style={{backgroundColor:'#fb641b'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightning" viewBox="0 0 16 16">
            <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/>
            </svg>Buy
          </button>
          <button className='btn my-1 mx-1'style={{backgroundColor:'#ff9f00'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
            <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>Add to cart
          </button>
          </Link>

        </div>
      ))}
    </div>
    </>
  )
}

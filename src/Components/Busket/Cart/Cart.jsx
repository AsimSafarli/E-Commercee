import {React} from  'react'


function Cart({ cart }) {
  return (
    <div className="flex flex-col gap-y-10 w-full">
      {cart.map((item) => (
        <div key={item.id} className="shadow p-3 flex flex-row items-center gap-x-10">
          <div><img src={item.image} className="w-32 object-fill "/></div>
          <div className="flex flex-col gap-y-5">
          <div>{item.title}</div>
          <div>{item.price}M</div>
          </div>
        </div>
      ))}
    </div>
  );
}
 export default Cart
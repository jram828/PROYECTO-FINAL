import './payments.css';
import { initMercadoPago } from "@mercadopago/sdk-react";
const PUBLIC_KEY = import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY;




function Payments() {
  
  initMercadoPago(PUBLIC_KEY);
  
  return (
    <div>
      <div>
        <p>Payments</p>
          
      </div>
    </div>
  )
}

export default Payments
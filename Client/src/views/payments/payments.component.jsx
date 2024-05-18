import './payments.css';

// const PUBLIC_KEY = import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY;
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";




function Payments() {
  
  // initMercadoPago(PUBLIC_KEY);
  initMercadoPago("TEST-06f58ad5-9c71-4fff-9bbf-67a1b9a05576");
  return (
    <div>
      <div>
        <p>Realizar pago</p>
        <div id="wallet_container"></div>

        <Wallet
          initialization={{ preferenceId: "<PREFERENCE_ID>" }}
          customization={{ texts: { valueProp: "smart_option" } }}
        />
      </div>
    </div>
  );
}

export default Payments
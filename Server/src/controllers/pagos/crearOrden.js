const { mercadopago } = require("mercadopago");

const crearOrden = async () => {
  mercadopago.configure({
    access_token:
      "TEST-3176577694700734-051711-d19831d5da8b20319a010655906a334c-1817941600",
  });

 const newOrden = await mercadopago.preferences.create({
    item: [
      {
        title: "honorarios",
        unit_price: 20,
        currency_id: "COP",
        quantity: 1
      }
    ]
 })
  
  console.log('result crear orden:', newOrden)
  return newOrden
};

module.exports = { crearOrden };
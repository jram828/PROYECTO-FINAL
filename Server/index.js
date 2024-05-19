const server = require("./src/server");

const { conn } = require("./src/DB");


const PORT = 3001;

conn
  .sync({ alter: false })
  .then(() => {})
  .catch((error) => console.error(error));

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

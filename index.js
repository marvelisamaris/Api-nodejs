import express from 'express';
import dotenv from 'dotenv';
import conectarBD from './config/db.js';

//swager
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.js';

//importar rutas
import usersRoutes from "./routes/usersRoutes.js";

//iniciamos el servidor express
const app = express()
app.use(express.json())//para leer los datos en formato json

//iniciamos las variables de entorno
dotenv.config();

//Conectar a BD mongo
conectarBD();

//Routing del API
app.use("/api/users", usersRoutes);

//Ruta de la documentación
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

//obtenemos una variable de entorno
const PORT = process.env.PORT || 3000

//Lanzando el API
app.listen(PORT, ()=>{
    console.log('Api escuchando en ${PORT}  ')
})

export default app;
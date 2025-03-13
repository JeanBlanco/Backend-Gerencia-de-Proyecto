import express from 'express';
import ventasRouter from './ventas.routes.js';
import clientesRouter from './clientes.routes.js';
import productosRouter from './productos.routes.js';


const routerApi = (app) => {  
    const router = express.Router();

    app.use('/api/v1', router);

    router.use('/ventas', ventasRouter);
    router.use('/clientes', clientesRouter);
    router.use('/productos', productosRouter);
}

export default routerApi;
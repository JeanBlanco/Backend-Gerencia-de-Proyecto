|-- node_modules
│-- src/
│   ├── config/              # Configuración del sistema
│   │   ├── db.js            # Conexión con SQL Server
│   │   ├── dotenv.js        # Configuración de variables de entorno
│   ├── controllers/         # Controladores de las rutas
│   │   ├── clientes.controller.js
│   │   ├── productos.controller.js
│   │   ├── ventas.controller.js
│   ├── models/              # Modelos de la base de datos
│   │   ├── cliente.model.js
│   │   ├── producto.model.js
│   │   ├── venta.model.js
│   ├── routes/              # Definición de las rutas de la API
│   │   ├── clientes.routes.js
│   │   ├── productos.routes.js
│   │   ├── ventas.routes.js
│   ├── middlewares/         # Middleware de autenticación y seguridad
│   │   ├── auth.middleware.js
│   ├── services/            # Lógica de negocio
│   │   ├── clientes.service.js
│   │   ├── productos.service.js
│   │   ├── ventas.service.js
│   ├── utils/               # Utilidades generales
│   │   ├── response.js
│   ├── index.js             # Punto de entrada del servidor
│-- .gitignore               # Archivos a ignorar en Git
│-- package.json             # Dependencias del proyecto
│-- package-lock.json        # Bloqueo de versiones de dependencias
│-- .env                     # Variables de entorno
│-- README.md                # Documentación del proyecto

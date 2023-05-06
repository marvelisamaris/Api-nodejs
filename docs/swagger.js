import swaggerJSDoc from 'swagger-jsdoc';

/**
 * Configuración Api, /la info
 */

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'api.nodejs',
            version: '1.0.0',
        },
        servers: [
            {
                url: "http://localhost:3004/api"
            },
            {
                url: "http://localhost:3000/api"
            }
        ],
    },
    apis: [
        "./routes/*.js"
    ],
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)

export default swaggerSpec;
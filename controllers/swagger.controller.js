const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const path = require('path');


swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.1',
        info: {
            title: 'Rest Api Book App - APIs',
            version: '1.0.0',
        },
        servers:
        [           
            {
                url: `http://localhost:${process.env.NEXT_PUBLIC_DATABASE_PORT}`
            }
        ],
    },
    apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

const options = {
    customSiteTitle: 'Rest Api Book'
};

module.exports = swaggerUi.setup(swaggerDocs, options)
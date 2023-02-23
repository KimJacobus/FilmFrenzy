import {Express, Request, Response} from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import {version} from '../../package.json';
import swaggerJSDoc from 'swagger-jsdoc';
import { func } from 'prop-types';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'REST API Docs',
            version
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis:['.app/routes/*.routes.js'],
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app, PORT) {
    //Swagger page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    //Docs in json format
    app.get('docs.json', (res, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    console.log(`Docs available at http://localhost:${PORT}/docs`);
};

module.exports = swaggerDocs;
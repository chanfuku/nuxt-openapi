import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { initialize } from 'express-openapi';
import { petService } from './services/petService';
import {Request, Response} from "express";

createConnection().then(async connection => {

  // create express app
  const app = express();
  app.use(bodyParser.json());

  // register express routes from defined application routes
  initialize({
    app,
    apiDoc: 'src/api-docs/v1/api.yml',
    paths: 'src/paths',
    dependencies: {
      petService,
    },
    routesGlob: '**/*.{ts,js}',
    routesIndexFileRegExp: /(?:index)?\.[tj]s$/,
    errorMiddleware: function(err, req, res, next) { // only handles errors for /v3/*
        res.status(err.status).json(err)
        next()
    }
  });

  app.use(((e, req, res, next) => {
    console.error(e);
    const message = `${e.errors[0].path} ${e.errors[0].message}`;
    res.status(500).json(message);
    next(e);
  }) as express.ErrorRequestHandler);

  // start express server
  app.listen(4000);
  console.log('Express server has started on port 4000. please check http://localhost:4000/v1/pets');

}).catch(error => console.log(error));

//. app.js

var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var jwt = require( 'jsonwebtoken' );

//. アプリケーションサーバーの稼働ポート番号
var port = process.env.PORT || 8088

//. API ROUTES
var apiRoutes = express.Router();

apiRoutes.use( function( req, res, next ){
    return res.status(403).send( { message: '403「キャアーーー！！のび太さんのfetch！！」' } );
  }
)

//. /api 以下に API をルーティング
app.use( '/', apiRoutes );


app.listen( port );
console.log( 'server started http://localhost:' + port + '/' );

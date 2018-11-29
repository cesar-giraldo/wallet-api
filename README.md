
# wallet

> API en Node JS, para cosultar y administrar una billetera virtual

## Build Setup 

``` bash
npm install


# Crear una base de datos en Postgres y configurar los datos de conexion en el archivo
/config/config.json


# Correr el siguiente comando para alimentar la base de datos con los billetes por defecto
node_modules/.bin/sequelize db:seed:all

# Ejecutar
DEBUG=wallet-api:* npm start

```
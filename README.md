<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Paginación con Sequalize, nest-paginate y mongoose-paginate-v2 en NESTJS

REST API para crear paginación sobre respuestas GET en NESTJS con Sequalize, nestjs-pagination y mongoose-paginate-v2

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Prerrequisitos 📋

_Que cosas necesitas para instalar para que la API funcione:_

1. NestJS > 8
2. nodejs > 10
3. docker & docker-compose

### Ejecución 🔧

_Para ejecutar la base de datos relacional_

1. levanta la base de datos con docker-compose.
```
docker-compose up -d
```

2. accede a la base de datos desde un gestor de base de datos como [DBeaver](https://dbeaver.io)
```
host: localhost
port: 9978
usr: admin
password: adminPassword123
```
_Para ejecutar la base de datos no relacional_

1. levanta la base de datos con docker-compose.
```
docker-compose up -d
```

2. accede a la base de datos desde un gestor de base de datos como [Studio 3T](https://robomongo.org)
```
host: localhost
port: 27010
usr: admin
password: adminPassword123
```

_Para poder ejecutar la APP necesitas seguir los siguientes pasos_

1. Abre una terminal desde la raíz del repositorio y ejecuta el siguiente comando para instalar todas las dependencias de Node que necesita la API para funcionar.

```
npm install
```

2. Para ejecutar la API en modo desarrollo (se recompila automáticamente cuando haces algún cambio).

```
nest start -w
```

## Construido con 🛠️

_herramientas que se utilizaron para crear este proyecto_

* [NestJS](https://docs.nestjs.com) - El framework de nodejs.
* [Nodejs](https://nodejs.org/es/) - Plataforma de ejecución.
* [Typescript](https://www.typescriptlang.org/) - El lenguaje de programación.
* [Sequelize](https://sequelize.org) - El ORM.
* [TypeORM](https://typeorm.io/#/) - El ORM.
* [Mongoose](https://mongoosejs.com) - El ORM.
* [nestjs-paginate](https://www.npmjs.com/package/nestjs-paginate) - dependencia de paginación para Typeorm.
* [mongoose-paginate-v2](https://github.com/aravindnc/mongoose-paginate-v2#readme) - dependencia de paginación para Mongoose.

## Autores ✒️

* **Oliver Zulett** - *Desarrollo* - [OliverZulett](https://github.com/OliverZulett)

## Licencia 📄

Este proyecto está bajo la Licencia (MIT) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

# Instrucciones
---

**Paso 1:** Levantar el docker-compose en modo detach 

`docker-compose up -d`

**Paso 2:** Listar los dockers activos 

`docker ps`

**Paso 3:** Inspeccionar el docker de postgres

`docker inspect {id_docker}`

**Paso 4:** verificar la IPAddress en la que se instaló el motor de postgres 

```
"Networks": {
"IPAddress": "xxx.xxx.xxx.x",
}
```

**Paso 5:** Ejecutar PGADMIN en el navegador ,  verificar el puerto en docker-compose.yml

`http://localhost:8080`

**Paso 6:** Logearse con las credenciales definidas en el archivo docker.env
**Paso 7:** Crear un nuevo server 
```
    host : IPAddress del Paso 4
    usuario y contraseña : credenciales definidas en el archivo docker.env 
```

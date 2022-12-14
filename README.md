# Ejercicio Kraken 🐙 y Cypress 🐢

## ✒️ Integrantes 

* **Romy Caicedo Molano** - r.caicedom@uniandes.edu.co
* **Andres Sanchez** - a.sanchez2001@uniandes.edu.co
* **Jesus Diaz** - jd.diazd1@uniandes.edu.co
* **Juan Camilo Hernandez Parra** - jc.hernandezp1@uniandes.edu.co

## Funcionalidades seleccionadas

| Funcionalidad |
| ------ |
| LogIn a la aplicación  |
| Añadir miembros |
| Eliminar Miembros |
| Crear Tags |
| Crear Post |
| Crear page ||
| Cambiar datos profile |
| Cambiar datos de navegacion |

|#| Escenarios de pruebas Kraken 🐙 | Asignado a |
|--- |------ |----|
|1| Crear y publicar un post|Andres Sanchez|
|2| Crear y publicar un post en el sitio web |Andres Sanchez|
|3| Crear un post -> editarlo -< escribir fecha de publicacion en el futuro -> verificar error  |Andres Sanchez|
|4| Publicar una nueva página |Andres Sanchez|
|5| Guardar pagina como borrador y publicarla |Andres Sanchez|
|6| Crear Draft post, validarlo en la lista| Andres Sanchez|
|7| Crear 2 post, ordenar la lista por el mas nuevo, validar en la lista que el post mas reciente esté de primeras |Andres Sanchez|
|8| Crear y eliminar un page|Andres Sanchez|
|9| Crear draft page, ir a lista y verificar que exista|Andres Sanchez|
|10| Crear page, ir a lista, editar el page, ingresamos fecha de publicación futura, validar error generado|Andres Sanchez|
|11| Login y Crear miembro |Romy Caicedo|
|12| Login y editar profile |Romy Caicedo|
|13| Crear tag interno |Romy Caicedo|
|14| Crear tag publico |Romy Caicedo|
|15| Editar Tag interno |Romy Caicedo |
|16| Editar Tag publico  |Romy Caicedo|
|17| Borrar un tag y validar que ya no este en la lista |Romy Caicedo|
|18| Editar settings general, editar title y guardar el cambio |Romy Caicedo|
|19| Entrar a settings, entrar a navigation, cambiar nombre de navigation about, guardar cambio|Romy Caicedo|
|20| Login y eliminar un miembro |Romy Caicedo|

| #   | Escenarios de pruebas Cypress 🐢                                                                               | Asignado a     |
|-----|----------------------------------------------------------------------------------------------------------------|----------------|
|1| Crear y publicar un post                                                                                       | Jesus Diaz     |
|2| Crear y publicar un post en el sitio web                                                                       | Jesus Diaz     |
|3| Crear un post -> editarlo -< escribir fecha de publicacion en el futuro -> verificar error                     | Jesus Diaz     |
|4| Publicar una nueva página                                                                                      | Jesus Diaz     |
|5| Guardar pagina como borrador y publicarla                                                                      | Jesus Diaz     |
|6| Crear Draft post, validarlo en la lista                                                                        | Jesus Diaz     |
|7| Crear 2 post, ordenar la lista por el mas nuevo, validar en la lista que el post mas reciente esté de primeras | Jesus Diaz     |
|8| Crear y eliminar un page                                                                                       | Jesus Diaz     |
|9| Crear draft page, ir a lista y verificar que exista                                                            | Jesus Diaz     |
|10| Crear page, ir a lista, editar el page, ingresamos fecha de publicación futura, validar error generado         | Jesus Diaz     |
|11| Login y Crear miembro                                                                                          | Juan Hernandez |
|12| Login y editar profile                                                                                         | Juan Hernandez  |
|13| Crear tag interno                                                                                              | Juan Hernandez  |
|14| Crear tag publico                                                                                              | Juan Hernandez  |
|15| Editar Tag interno                                                                                             | Juan Hernandez  |
|16| Editar Tag publico                                                                                             | Juan Hernandez  |
|17| Borrar un tag publico y validar que ya no este en la lista                                                     | Juan Hernandez  |
|18| Borrar un tag interno y validar que ya no este en la lista                                                     | Juan Hernandez  |
|19| Editar settings general, editar title y guardar el cambio                                                      | Juan Hernandez  |
|20| Entrar a settings, entrar a navigation, cambiar el nombre de la primera "primary navigation", guardar cambios  | Juan Hernandez  |
|21| Login y eliminar un miembro                                                                                    | Juan Hernandez  |

## 📒 Pasos para ejecutar los escenarios de prueba con Kraken 🐙

Para ejecutar estos casos debe tener intalado kraken, si no lo tiene instalelo: 
```sh
npm install kraken-node -g
```
>

**Pasos primeros 10 test**
>
> Crear un usuario en ghost con la siguiente email y password: a.sanchez2001@uniandes.edu.co y Arsenal93.

> Al tener el repositorio en su local, entre a la carpeta Kraken alli podrá ejecutar los test con el comando 
> ./node_modules/kraken-node/bin/kraken-node run

**Pasos siguientes 10 test**
> Para este caso levantar ghost en el puerto 2370
> Crear un usuario en ghost con la siguiente email y password: r.caicedom@uniandes.edu.co y testpruebas
>
> Al tener el repositorio en su local, entre a la carpera romycaicedo/install/here/ alli podrá ejecutar los test con el comando 
> ./node_modules/kraken-node/bin/kraken-node run

> *Nota: Revisamos con los tutores y las pruebas a ratos salen exitosas completas en otro casos da error por ejemplo
> target closed o time out sin haber cambiado nada.
> 

## 📒 Pasos para ejecutar los escenarios de prueba con Kraken version 3.42🐙

Para ejecutar estos casos debe tener intalado kraken, si no lo tiene instalelo: 
```sh
npm install kraken-node -g
```
>

**Pasos primeros 10 test**
>
> Se debe ejecutar el siguiente comando:
docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42

Una vez la aplicación este corriendo en docker se debe crear un usuario con los siguientes datos:
usuario: a.sanchez2001@uniandes.edu.co
contraseña: Arsenal93.

Pararse en el sigueinte path: Andres%20Sanchez%20semana%206/Ghost_old_version/features
Y ejecutar el siguiente comando: ./node_modules/kraken-node/bin/kraken-node run

**Pasos siguientes 10 test**


> Se debe ejecutar el siguiente comando:
docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42

Una vez la aplicación este corriendo en docker se debe crear un usuario en ghost con la siguiente email y password: r.caicedom@uniandes.edu.co y testpruebas
Pararse en el sigueinte path: /romycaicedosemana6/install/here
Y ejecutar el siguiente comando: ./node_modules/kraken-node/bin/kraken-node run
>

> *Nota: Al igual que la semana anterior, al añadir la funcion para tomar screens en un folder especifico y con nombre personalizado se generan timeout en los test, al retiralos estos ejecutan con normalidad , lo mismo ocurria la semana pasa con los And i wait for n seconds, por tamto se modificaron para ser exitosos en la version pero con los screen en las carpetas que genera kraken.
> 

## 📒 Pasos para ejecutar los escenarios de prueba con Cypress 🐢
> **Inserte aqui pasos**

```sh
npm install kraken-node -g
```
>
> Crear un usuario en ghost con la siguiente email y password: jd.diazd1@uniandes.edu.co y @123Asd456

> 
> ejecutar el siguiente comando: ./node_modules/.bin/cypress run 
> 
## 📒 Pasos para ejecutar los escenarios de prueba con Cypress version 3.42 🐢

```sh
docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42
```
```sh
npm install kraken-node -g
```
>
> Crear un usuario en ghost con la siguiente email y password: jd.diazd1@uniandes.edu.co y @123Asd456

> 
> ejecutar el siguiente comando: ./node_modules/.bin/cypress run 

## 📒 Pasos para revisar los reportes HTML resultado de Resemble JS 
> Descarge en zip o de la forma de su preferencia el repositorio
> En este repositorio ingrese a la ruta Resemble alli encontrará el script creado para la comparación.

> Ingrese a la ruta Resemble/results alli encontrará dos carpetas de nombre 2022-11-20T23.41.56.820Z y 2022-11-20T23.42.45.708Z (tuvimos que ejecutar las pruebas en dos partes dado que todas en una sola noa generaba error), en cada una de estas encuentra los screenshot y un report.html
> Abra en us navegador los archivos html para visualizar los reportes.

## 🎥 Video semana 6 
> Puede encontrar nuestro video de la semana en la wiki del proyecto, alli hablamos de el impacto de pruebas fallidas y exitosas
y demas procedimientos, decisiones y resultados de la semana.

## Funcionalidades seleccionadas PRV
|#| Descripciónn Escenarios de pruebas Semana 6 PRV 🐙 |
|--- |------ |
|1| Crear y publicar un post|
|2| Crear y publicar un post en el sitio web |
|3| Crear un post -> editarlo -< escribir fecha de publicacion en el futuro -> verificar error  |
|4| Publicar una nueva página |
|5| Guardar pagina como borrador y publicarla |
|6| Crear Draft post, validarlo en la lista
|7| Crear 2 post, ordenar la lista por el mas nuevo, validar en la lista que el post mas reciente esté de primeras
|8| Crear y eliminar un page|Andres Sanchez|
|9| Crear draft page, ir a lista y verificar que exista
|10| Crear page, ir a lista, editar el page, ingresamos fecha de publicación futura, validar error generado

#📒 Pasos para ejecutar los primeros 60 escenarios de prueba con cypress con datos aleatorios y apriori 🐢

Para ejecutar estos casos debe tener intalado cypress, si no lo tiene instalelo:

Pasos primeros 30 casos

Crear un usuario en ghost con la siguiente email y password: a.sanchez2001@uniandes.edu.co y Arsenal93.
Pasos siguientes 30 test

Crear un usuario en ghost con la siguiente email y password: r.caicedom@uniandes.edu.co y testpruebas

Al tener el repositorio en su local, entre a la carpeta Pruebas Aleatorias allí de ser necesario descargar las dependencias con npm install, posteriormente ingrese el comando cypress open y añada la carpeta como proyecto, luego de correr en browser
Allí podrá dar click en los .feature que correrán los test en ambos casos

## Generación de pruebas con datos aleatorios
Para ejecutar estas pruebas siga los siguientes pasos:
- Vaya a la ruta "MISW-Pruebas-Automatizadas-01/Pruebas aleatorias/"
- Abrir una terminal y ejecutar el comando "npm i"
- Ejecutar el comando npm run cypress:open
- Hacer click en cada uno de los siguientes paquetes de tests: APriori.feature, dinamic.feature, aleatorio.feature. Cada archivo corresponde a una suite de tests con cada estrategia de generación de datos


-----------------------------------------------------------------------------------------------------
**Pasos para ejecutar los escenarios 60 a 89 entregable semana 7**

1) Instalar Docker en el ordenador.
2) Ejecutar el siguiente comando.

  > 
  > docker run -d --name some-ghost -e NODE_ENV=development -e url=http://localhost:3001 -p 3001:2368 ghost

3) Acceder a la siguiente url: [http://localhost:3001/ghost/#/signin](http://localhost:3001/ghost/#/setup)
4) Crear un usuario con los siguientes criterios

  > 
  > email: jd.diazd1@uniandes.edu.co
  > 
  > password: @123Asd456
5) Clonar el repositorio.
6) Una vez clonado, acceder a la carpeta del repositorio y ejecutar el comando:

  > 
  > cd CypressGhost/
7) Una vez alli es momento de instalar las dependencias, con los siguientes comandos:

  > 
  > npm install cypres
  > 
  > npm install @faker-js/faker
8) Ejecutar los casos de pruebas con cualquiera de los siguentes comandos:

  > 
  > ./node_modules/.bin/cypress run 
  > 
  > ./node_modules/.bin/cypress open

NOTA: En caso de tener problemas con el login, repetir los pasos 1,2 y 3, borrando previamente la imagen del docker creada.

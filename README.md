# Ejercicio Kraken 🐙 y ...

## ✒️ Integrantes 

* **Romy Caicedo Molano** - r.caicedom@uniandes.edu.co
* **Andres Sanchez** - a.sanchez2001@uniandes.edu.co
* **Jesus Diaz** - jd.diazd1@uniandes.edu.co
* **Juan Camilo Hernandez Parra** - jc.hernandezp1@uniandes.edu.co

## Funcionalidades seleccionadas

| Funcionalidad | Descripcion |
| ------ | ---- |
| LogIn a la aplicación  | |
| Añadir miembros ||
| Eliminar Miembros ||
| Crear Tags ||
| Crear Post ||
| Crear page ||
| Cambiar datos profile ||

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
> Crear un usuario en ghost con la siguiente email y password: jd.diazd1@uniandes.edu.co y @123Asd456
> Al tener el repositorio en su local, entre a la carpeta Kraken alli podrá ejecutar los test con el comando 
> ./node_modules/kraken-node/bin/kraken-node run

**Pasos siguientes 10 test**

> Crear un usuario en ghost con la siguiente email y password: r.caicedom@uniandes.edu.co y testpruebas
> Al tener el repositorio en su local, entre a la carpera romycaicedo/install/here/ alli podrá ejecutar los test con el comando 
> ./node_modules/kraken-node/bin/kraken-node run

> *Nota: Revisamos con los tutores y las pruebas a ratos salen exitosas completas en otro casos da error por ejemplo
> target closed o time out sin haber cambiado nada.
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

## Nuela - Prueba Técnica

# Nuela - Prueba técnica

Se realiza dashboard de vista y creacion de materias para un profesor dentro de una plataforma educativa.

Link al proyecto: https://nuela.vercel.app/

## Estructura

Se inicia creando un proyecto en la última versión de [NextJS](https://nextjs.org/), utilizando Typescript, TailwindCSS y App Router. Luego se continua con la creación de la base de datos PostgreSQL dentro de la plataforma de [Vercel](https://vercel.com/).

## Base de datos

Se crea el modelo de base de datos y migraciones utilizando el **ORM** [Prisma](https://www.prisma.io/). Luego dentro del .env se colocan las variables de entorno.

## Definiciones

Se crean definiciones para importar en componentes a requerimiento.

## Páginas

Al solo realizarse la página de home, esta es la única que tiene paginado dentro del App Router. Se pone un perma redirect en el archivo de config de NextJS para trasladar a **"/home"** las consultas a **"/"**.

## Componentes

Se crean componentes acordes a la estructura de la página. Separando el side navigation común al dashboard de los componentes de la página **"/home"**.
Al componentizar se trata en mayor medida de lograr componentes reutilizables (como time-card, button, etc.), aunque pueden ser mejorados según los requerimientos que pueda haber en el futuro.

## Estilos

Para los estilos se utiliza TailwindCSS y se agrega un archivo fonts en "/ui" para la importación de fuentes de google. La fuente "satoshi" es agregada al config de TailwindCSS en el extend del theme e importada a través del head.

Los colores podrían haberse agregado al config de TailwindCSS, pero queda pendiente en un proximo commit.

## Fetching

Para las consultas a la base de datos se utilizan **React Server Components** y , de esta manera **evitamos un uso del API Layer** y directamente hacemos las consultas a la base de datos desde estos componentes. Para el envío de data a través del form, se utilizan **Server Actions** moldeando el FormData con la librería "Z" dentro de un **Server Component**.

## Extras

Se agregaron extras, como un botón de **"Cargando..."** que espera a que se ejecute la acción en el servidor. Y un **"hamburguer menu"** en la vista mobile (en proceso).

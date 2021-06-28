# Swagger-Express

## Install

```
yarn install
```

## Run development

```
yarn run dev
```

## Access documentation

http://localhost:8080/api-docs

## Reference

```
  @swagger
   components:
     schemas:
       Book:
         type: object
         required:
           - title
           - author
           - finished
         properties:
           id:
             type: integer
             description: The auto-generated id of the book.
           title:
             type: string
             description: The title of your book.
           author:
             type: string
             description: Who wrote the book?
           finished:
             type: boolean
             description: Have you finished reading it?
           createdAt:
             type: string
             format: date
             description: The date of the record creation.
         example:
            title: The Pragmatic Programmer
            author: Andy Hunt / Dave Thomas
            finished: true
```

```
  @swagger
  tags:
    name: Books
    description: API to manage your books.
```

```
  @swagger
  path:
   /books/:
     post:
       summary: Creates a new book
       tags: [Books]
       requestBody:
         required: true
         content:
           application/json:
             schema:
               $ref: '#/components/schemas/Book'
       responses:
         "200":
           description: The created book.
           content:
             application/json:
               schema:
                 $ref: '#/components/schemas/Book'
```

```
  @swagger
  path:
   /books/:
     get:
       summary: Lists all the books
       tags: [Books]
       responses:
         "200":
           description: The list of books.
           content:
             application/json:
               schema:
                 $ref: '#/components/schemas/Book'
     post:
       summary: Creates a new book
       tags: [Books]
       requestBody:
         required: true
         content:
           application/json:
             schema:
               $ref: '#/components/schemas/Book'
       responses:
         "200":
           description: The created book.
           content:
             application/json:
               schema:
                 $ref: '#/components/schemas/Book'
   /books/{id}:
     get:
       summary: Gets a book by id
       tags: [Books]
       parameters:
         - in: path
           name: id
           schema:
             type: integer
           required: true
           description: The book id
       responses:
         "200":
           description: The list of books.
           content:
             application/json:
               schema:
                 $ref: '#/components/schemas/Book'
         "404":
           description: Book not found.
     put:
       summary: Updates a book
       tags: [Books]
       parameters:
         - in: path
           name: id
           schema:
             type: integer
           required: true
           description: The book id
       requestBody:
         required: true
         content:
           application/json:
             schema:
               $ref: '#/components/schemas/Book'
       responses:
         "204":
           description: Update was successful.
         "404":
           description: Book not found.
     delete:
       summary: Deletes a book by id
       tags: [Books]
       parameters:
         - in: path
           name: id
           schema:
             type: integer
           required: true
           description: The book id
       responses:
         "204":
           description: Delete was successful.
         "404":
           description: Book not found.
```

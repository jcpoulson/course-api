# course-api
Welcome to the back-end of the English For Life project. The majority of the documentation will be held in the documentation folder/directory but this will introduce the project.

so to start off this project runs primarily on JavaScript more specifically Node.js, JavaScript that runs on the server side using the Express framework. Unlike React, Express is in my opinion is a very easy framework to use that is very minimalistic leaving much freedom to the programmer, but with that being said, Express apps can often get confusing becuase people tend to set them up in many different ways, as long as you have familiarity with basic server side programming, you should be fine.

## Another really big note about this project is the database
So this project currently runs a postgres database but we are taking this API off of our server, so whatever database you run on your server is up to you.

Another note about this project is that it uses the Sequelize ORM for interacting with the database, if you aren't familiar with what an ORM is, it is short for Object Relational Mapper, and they are libraries that allow you to write JavaScript or whatever language it is written in to interact with the sql database.

    instead of writing
        SELECT * FROM TABLE

    You would write
        Table.select().all()


Please Proceed to /Documentation/start.md

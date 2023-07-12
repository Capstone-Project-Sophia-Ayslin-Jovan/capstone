# Github

# Settings Configuration

1. $ git config --global push.default current

# Committing to Github

Before you do ($ git add .), make sure to create a branch!

1. $ git checkout -b branch_name --> Creates a new branch and also switches you to it; if you want to just navigate to a branch do
   git checkout branch_name
2. $ git add .
3. $ git commit -m message
4. $ git push

# Pull Requests

After you push to your branch, you will have to make a pull request if you want to merge your branch with the main

1. Go onto Github repo
2. Navigate to Pull Requests
3. Create new pull request with your branch
4. Check for merge conflicts & resolve them
5. Submit Pull Request

Review other ppls pull requests!

# Setting Up, Updating & Running Prisma

# Setup -- NO LONGER NEEDS TO BE DONE

1. Set DATABASE_URL in .env to:
   postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public

2. $ npx prisma migrate dev --name init
   Maps data model to database scheme
   It creates a new SQL migration file for this migration
   It runs the SQL migration file against the database

3. $ npm install @prisma/client
   Reads your Prisma schema and generates a version of Prisma Client that is tailored to your models.

# Updating

1. $ npx prisma db push
   Do this at first if you need to update database, then before you commit move on to step 2

2. $ npx prisma generate

3. $ npx prisma migrate dev
   This will keep your database schema in sync with your Prisma schema.
   The commands will also regenerate Prisma Client.
   Give it a name that makes sense.

# Running index.ts

1. $ npm start

# Dropping Database

1. $ psql
   drop database literate;
2. $ npx prisma db push

Alternatively:

1. $ npx prisma migrate reset

# View database

1. $ npx prisma studio

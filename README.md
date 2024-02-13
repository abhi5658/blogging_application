# blogging_application

This repo houses backend and frontend for blogging application

## Backend APIs
### Blog service
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/11273162-5fcf7e79-ab6f-4ae4-a760-0ed279aeb9b5?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D11273162-5fcf7e79-ab6f-4ae4-a760-0ed279aeb9b5%26entityType%3Dcollection%26workspaceId%3D23b2cc40-0e40-4074-9f28-d84c3c95dc5b)

1. **_GET_** `/blogs` - Retrieves recently created blogs
1. **_POST_** `/blog` - Creates a new blog
1. **_GET_** `/blogs/:id` - Retrieves blog by id

## Server Notes

- The server is running with [nodemon](https://nodemon.io/) which will automatically restart for you when you modify and save a file.

- The database used is SQLite, which will store data in a file local to your repository called `database.sqlite3`. The ORM [Sequelize](http://docs.sequelizejs.com/) is on top of it.

- The BACKEND server is running on port **3001**.

## Understanding project structure
- `src/routes` contains all the routes or path of the application
- `src/controllers` contains all the controllers attached to paths are places in
- `src/services` contains independent functions to perform different actions on DB or get data from DB
- `tests/unit` contains unit tests for all services
- `tests/integration` cantains all the controller level or API integration tests

## Testing the backend 🎮
- Go to backend directory
```sh
cd backend/
```
- Run tests ✅
```sh
npm run test
```
- Setup and start the backend application ▶️
```sh
npm run seed
npm run start
```
- Open Postman
  - Import `postman_collection.json` from this repo to test out the post analytics service
  - Import `blogging.postman_collection.json` from this repo to test out the mock stock trading service
  - Run all the request to test out all applications


## Frontend

### Frontend routes
1. `/` - Home page og blogger website
1. `/blogs` - Alternate to home page
1. `/blogs/:id` - Open full blog
1. `/create` - Create a new blog

## Understanding frontend project structure
- `src/components` contains all the UI components
- `src/services` contains independent functions to perform different backend API calls

## Testing the frontend 🎮
- Go to backend directory
```sh
cd frontend/
```
- Start the frontend application ▶️
```sh
npm run start
```
- Frontend is hosted at http://localhost:3000/

### Functionalities
- List all the blogs on homepage
- Click on specific blog to view full blog
- "Create a new blog" button to create a new blog

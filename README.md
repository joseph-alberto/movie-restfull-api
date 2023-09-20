# Movie RESTfull API

Welcome to the Movie RESTfull API documentation. This API allows you to access and manage movie data effortlessly. Here's how you can get started with the setup:

## Getting Started

To set up and run the Movie RESTfull API on your local machine, follow these steps:

#### 1. Clone the Project

Begin by cloning this repository to your local machine:

```
git clone https://github.com/joseph-alberto/movie-restfull-api.git
```

#### 2. Install Dependencies

Navigate to the project directory and install all the required dependencies by executing the following command in your terminal:

```
npm install
```

#### 3. Configure Your Database

Create two databases: `movies` (for development and production) and `movies_test` (for testing). Ensure you have access to these databases and their credentials. Next, configure your database connection details in the `config/config.json` file.

#### 4. Migrate the Database Schema

Migrate the database schema using the Sequelize CLI:

```
npx sequelize-cli db:migrate
```

This command will create the necessary tables in your `movies` database.

#### 5. Start the Application

With everything set up, you can now start the application by running:

```
npm start
```

The API should now be running locally and ready for use.

## API Endpoints

The Movie RESTful API provides several endpoints for managing movie data. here the detailed information about these endpoints.
| No  | Endpoint    | Method | Describe                                                                              |
| --- | --------    | ------ | ------------------------------------------------------------------------------------- |
| 1   | /movies     | GET    | Return the list of a movies in JSON format                                            |
| 2   | /movies/:id | GET    | Return the details of a movies in JSON format                                         |
| 3   | /movies     | POST   | Add a Movie to the movies list, the data should be sent as a JSON in the request body |
| 4   | /movies/:id | PATCH  | Update a Movie by given id, the data should be sent as a JSON in request body         |
| 5   | /movies/:id | DELETE | Delete a Movie by given id.                                                           |

## Unit Test

To run the unit tests, ensure that you have a database named ***movies_test*** in your database. Then, execute the following command to run the tests.
```
npm test
```

Enjoy using the Movie RESTfull API!

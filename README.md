# Student API Mini

A minimal yet powerful RESTful API built using Express.js and MongoDB (Mongoose) to manage student records. This API supports full CRUD operations along with search, class filtering, and pagination.

Built by [Daniel Iryivuze](https://github.com/Daniel-IRYIVUZE)

---

## Features

- Create student records
- Retrieve all students
- Search students by name
- Filter students by class
- Paginate results
- MongoDB connection using Mongoose
- Organized with Express Router and Controllers

---

## Project Structure

```

student-api-mini/
├── controllers/
│   └── studentController.js
├── models/
│   └── studentModel.js
├── routes/
│   └── studentRoutes.js
├── .env
├── server.js
├── package.json

````

---

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- MongoDB (locally or MongoDB Atlas)

---

## Installation

1. Clone the repository
```bash
git clone https://github.com/Daniel-IRYIVUZE/student-api-mini.git
cd student-api-mini
````

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/student_api
```

4. Start the server

```bash
node server.js
```

The API will run at: `http://localhost:3000`

---

## API Usage

### Create a Student

**POST** `/api/students`

Example body:

```json
{
  "name": "Daniel Iryivuze",
  "class": "S6MEC"
}
```

---

### Get Students

**GET** `/api/students`

Optional Query Parameters:

* `search` — Search by name
* `class` — Filter by class
* `page` — Page number (default: 1)
* `limit` — Number of results per page (default: 10)

Example:

```
GET /api/students?search=daniel&class=S6MEC&page=1&limit=5
```

---

## Future Improvements

* Update and delete student records
* Add authentication (JWT)
* Add testing with Jest or Mocha

---

## Author

Daniel Iryivuze

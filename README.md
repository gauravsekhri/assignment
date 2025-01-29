# **To-do Assignment**

This is a simple Node.js application that implements CRUD (Create, Read, Update, Delete) operations for a To-Do application. The application allows users to manage their tasks via HTTP requests.

## Installation

### 1. Install node modules

```
npm install
```

### 2. Start server

```
npm run start:dev
```

## Tech Used

- NodeJs
- ExpressJs
- NestJs
- MongoDb

## Swagger

Swagger is available at /docs endpoint.

```
http://localhost:5000/docs
```

## Api Endpoints

### 1. Create Note

#### POST /api/notes

Output:

```
{
  "success": true,
  "status": 200,
  "message": "Note saved successfully",
  "data": {
    "_id": "679a7d4d8b36034674867e1e",
    "title": "This is title",
    "description": "This is description.",
    "createdAt": "2025-01-29T19:11:09.633Z",
    "updatedAt": "2025-01-29T19:11:09.633Z",
  }
}
```

### 2. Get Notes

#### GET /api/notes

Output:

```
{
  "success": true,
  "status": 200,
  "message": "Found 1 note(s)",
  "data": [
    {
      "_id": "679a7d4d8b36034674867e1e",
      "title": "This is title",
      "description": "This is description.",
      "createdAt": "2025-01-29T19:11:09.633Z",
      "updatedAt": "2025-01-29T19:11:09.633Z",
    }
  ]
}
```

### 3. Update Note

#### PUT /api/notes/:id

Output:

```
{
  "success": true,
  "status": 200,
  "message": "Note updated successfully",
  "data": null
}
```

### 4. Delete Note

#### DELETE /api/notes/:id

Output:

```
{
  "success": true,
  "status": 200,
  "message": "Note deleted successfully",
  "data": null
}
```

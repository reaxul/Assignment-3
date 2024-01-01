# Course Review API

This is a TypeScript-based Express.js API for managing courses, categories, and reviews.

## Technology Stack

- Programming Language: TypeScript
- Web Framework: Express.js
- Object Data Modeling (ODM) and Validation Library: Mongoose for MongoDB


## Instruction

### Running the Application Locally

Follow these steps to run the Course Review API locally:

#### Prerequisites

Make sure you have the following installed on your machine:

1. Node.js: [Download and install Node.js](https://nodejs.org/).
2. MongoDB: [Download and install MongoDB](https://www.mongodb.com/try/download/community).

#### Clone the Repository

```bash
git clone https://github.com/reaxul/Assignment-3.git
cd course-review-api
```

#### Install Dependencies

```bash
npm install
```

#### Configure Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
PORT=5000
DATABASE_URL=mongodb://localhost:27017/assignment-3
```


#### Run the Application

```bash
npm run start:dev
```

The API should be running on `http://localhost:5000`.

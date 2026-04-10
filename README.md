# Satyam Dwivedi — Portfolio API

REST API backend for the portfolio website. Built with Express.js and MongoDB, deployed on Vercel.

Frontend: [satyamdwivedi.com.np](https://satyamdwivedi.com.np) | Source: [portfolio](https://github.com/satyamdwivedi7/portfolio)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB (Mongoose) |
| Email | Nodemailer |
| Deployment | Vercel |

---

## Endpoints

### Public

| Method | Route | Description |
|---|---|---|
| GET | `/` | Health check |
| GET | `/projects` | Get all projects (sorted by date, latest first) |
| GET | `/skills` | Get all skill categories |
| GET | `/certifications` | Get all certifications |

### Protected (requires `secret` header)

| Method | Route | Description |
|---|---|---|
| POST | `/naya-project` | Add a new project |
| POST | `/new-skillset` | Add a new skill category |
| POST | `/new-certification` | Add a new certification |
| POST | `/sendmail` | Send contact form email to owner + confirmation to visitor |

Protected routes require the `secret` header to match `API_SECRET` from the environment.

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB database (Atlas or local)
- Gmail account with an App Password for Nodemailer

### Setup

```bash
git clone https://github.com/satyamdwivedi7/portfolio-api.git
cd portfolio-api
npm install
```

### Environment Variables

Create a `.env` file:

```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/portfolio
API_SECRET=your_strong_secret
ALLOWED_ORIGIN=https://satyamdwivedi.com.np,https://www.satyamdwivedi.com.np
PORT=8000
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

- `API_SECRET` — used by the secret middleware to protect write routes. Must match `API_SECRET` in the frontend `.env.local`.
- `ALLOWED_ORIGIN` — comma-separated list of allowed CORS origins.
- `EMAIL_USER` / `EMAIL_PASS` — Gmail credentials for Nodemailer. Use a [Gmail App Password](https://support.google.com/accounts/answer/185833), not your account password.

### Run

```bash
node index.js
```

API will be available at [http://localhost:8000](http://localhost:8000).

---

## Project Structure

```
index.js                          # App entry — Express setup, CORS, MongoDB connection
routes.js                         # All route definitions
controller/
  projects.controller.js          # Create / get projects
  skills.controller.js            # Create / get skills
  certifications.controller.js    # Create / get certifications
  mail.controller.js              # Nodemailer transport
model/
  projects.js                     # Mongoose schema for Project
  skills.js                       # Mongoose schema for Skill
  certifications.js               # Mongoose schema for Certification
mail/
  mail.js                         # HTML email templates + sendMail function
middleware/
  secret.middlleware.js           # Validates secret header on protected routes
```

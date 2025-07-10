# 🗳️ VotingSystem

A simple online voting platform built for school elections.

## 🚀 Live Demo

* **Vote here** 👉 [https://votingsystem-j8qq.onrender.com](https://votingsystem-j8qq.onrender.com)
* **View Results / Dashboard** 👉 [https://votingsystem-j8qq.onrender.com/dashboard](https://votingsystem-j8qq.onrender.com/dashboard)

---

## 🔐 How Voting Works

To cast a vote, users need a unique **voting code**. This code ensures only valid participants can access the platform and vote once.

### ✅ Voting Code Format

The code format is structured as:

```
<COURSE_INITIAL><RANDOM_3_DIGITS><NUMBERS_FROM_1_TO_THE_NUMBER_OF_STUDENTS_OFFERING_THE_COURSE><CURRENT_YEAR>
```

### Example

* For a **Science** student in **2025**, a valid code will be:
  `S8372025`

### Course Initials

| Course     | Initial | Randon 3 digits | 1-number_of_students | Current Year |
| ---------- | ------- | --------------- | -------------------- | ------------ |
| Science    | S       | 567             | 1                    | 2025         |
| Business   | B       | 580             | 3                    | 2025         |
| Arts       | A       | 764             | 8                    | 2025         |
| Technical  | T       | 432             | 29                   | 2025         |
| Home Econs | H       | 547             | 50                   | 2025         |

---

## 📋 How to Use

1. Go to [Vote Page](https://votingsystem-j8qq.onrender.com)
2. Enter your **voting code**.
3. Vote for your preferred candidate.
4. Done! (Only one vote per code is allowed.)

---

## 🛠️ Built With

* HTML / CSS
* JavaScript
* Python / Django
* SQLight
* Deployed on Render

---

import express from 'express'
const app = express();
app.use(express.json());

const users = [
  { id: 1, username: "user1", email: "user1@example.com", role: "student", registeredAt: "2023-01-10" },
  { id: 2, username: "user2", email: "user2@example.com", role: "teacher", registeredAt: "2023-01-12" },
  { id: 3, username: "user3", email: "user3@example.com", role: "student", registeredAt: "2023-01-15" },
  { id: 4, username: "user4", email: "user4@example.com", role: "admin", registeredAt: "2023-01-18" },
  { id: 5, username: "user5", email: "user5@example.com", role: "student", registeredAt: "2023-01-20" },
  { id: 6, username: "user6", email: "user6@example.com", role: "teacher", registeredAt: "2023-01-22" },
  { id: 7, username: "user7", email: "user7@example.com", role: "student", registeredAt: "2023-01-25" },
  { id: 8, username: "user8", email: "user8@example.com", role: "admin", registeredAt: "2023-01-28" },
  { id: 9, username: "user9", email: "user9@example.com", role: "student", registeredAt: "2023-02-01" },
  { id: 10, username: "user10", email: "user10@example.com", role: "teacher", registeredAt: "2023-02-03" },
  { id: 11, username: "user11", email: "user11@example.com", role: "student", registeredAt: "2023-02-06" },
  { id: 12, username: "user12", email: "user12@example.com", role: "admin", registeredAt: "2023-02-09" },
  { id: 13, username: "user13", email: "user13@example.com", role: "student", registeredAt: "2023-02-12" },
  { id: 14, username: "user14", email: "user14@example.com", role: "teacher", registeredAt: "2023-02-15" },
  { id: 15, username: "user15", email: "user15@example.com", role: "student", registeredAt: "2023-02-18" },
  { id: 16, username: "user16", email: "user16@example.com", role: "admin", registeredAt: "2023-02-21" },
  { id: 17, username: "user17", email: "user17@example.com", role: "student", registeredAt: "2023-02-24" },
  { id: 18, username: "user18", email: "user18@example.com", role: "teacher", registeredAt: "2023-02-27" },
  { id: 19, username: "user19", email: "user19@example.com", role: "student", registeredAt: "2023-03-02" },
  { id: 20, username: "user20", email: "user20@example.com", role: "admin", registeredAt: "2023-03-05" }
];
try {
 app.get('/', (req, res) => {
    res.send("hellow world")
})
app.get('/data', (req, res) => {
    res.send(users)
})

app.listen(3000, () => console.log("server is running on http://localhost:3000"));   
} catch (error) {
    console.log(error,"somthing is wrong with route")
}


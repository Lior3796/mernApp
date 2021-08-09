const express = require("express");
const studentRouter = express.Router();
const studentController = require("../Controllers/studentController");

studentRouter.get("/", studentController.getStudents);
studentRouter.get("/Student",studentController.getStudent);
studentRouter.post("/", studentController.createNewStudent);
studentRouter.put("/",studentController.updateStudent);
studentRouter.delete("/:email",studentController.deleteStudent);

module.exports = studentRouter;
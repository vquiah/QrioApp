const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const upload = require("../middleware/multer");
const subjectsController = require('../controllers/subjects');



//* Main Routes
// @desc get all subject page
// @route GET /subjects
router.get('/', subjectsController.getSubjects);
// @desc get to new subject form
// @route GET /subjects/add-subject
router.get('/add-subject', subjectsController.getNewSubjectPage)
// @desc create new subject
// @route POST /subjects/createSubject
router.post('/createSubject', upload.single("file"), subjectsController.createSubject);

module.exports = router
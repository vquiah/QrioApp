const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const subjectsController = require('../controllers/subjects');




//* Main Routes
// @desc get individual subject page
// @route GET /subject/:id
router.get('/:id', subjectsController.getSubjectPage);
// @desc get subject update page
// @route GET /subject/update_subject_page/:id
router.get('/update_subject_page/:id', subjectsController.getSubjectUpdatePage); 
// router.put('/update_subject_page/:id', subjectsController.updateSubjectInfor); 
router.put('/update_subject/:id', subjectsController.updateSubjectInfo); 

module.exports = router 
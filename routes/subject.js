const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const subjectsController = require('../controllers/subjects');




//* Main Routes
// @desc get individual subject page
// @route GET /subject/:id
router.get('/:id', subjectsController.getSubjectPage);
// @desc get subject update page
// @route GET /subject/:id/update_subject_page
router.get('/:id/update_subject_page', subjectsController.getSubjectUpdatePage); 
router.put('/:id/update_subject_page', subjectsController.updateSubjectInfor); 

module.exports = router 
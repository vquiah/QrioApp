const cloudinary = require("../middleware/cloudinary");
const Subjects = require("../models/Subjects");
// const Comment = require('../models/comment')

module.exports = {
  getSubjects: (req, res) => {
      res.render("subjects.ejs");
    },
  getNewSubjectPage:(req, res) => {
      res.render("add-subject.ejs");
    },
  createSubject: async(req, res) => {
    try{
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      await Subjects.create(
        console.log(req.body), {
        
        // user: req.users.id,
        subjPic: result.secure_url,
        cloudinaryId: result.public_id,
        subjFullName: req.body.subjFullName,
        subjstudyNum:req.body.subjstudyNum,
        dob:req.body.dob,
        gender:req.body.gender,
        // age:req.body.age,
        subjHomeAdress: req.body.subjHomeAdress,
        telephone:req.body.telephone,
        email:req.body.email,
        studyIn:req.body.studyIn,
        status:req.body.status,
      });
         console.log("Subject has been created!");
         res.redirect("/subjects");
    }catch (err) {
      console.log(err);
      }
    },


  };
const cloudinary = require("../middleware/cloudinary");
const Subjects = require("../models/Subjects");
const User = require("../models/User");


module.exports = {
  getSubjects: async (req, res) => {
    try{
      const subjects = await Subjects.find().sort({ subjFullName: "desc" }).lean();
     
        res.render("subjects.ejs", {
           subjects: subjects });
    }catch(err){
      console.log(err)
      }
    },
  getNewSubjectPage:(req, res) => {
      res.render("add-subject.ejs");
    },
  getSubjectPage: async (req, res) => {
      try{
        const subject = await Subjects.findById(req.params.id);
        res.render("subject.ejs", { 
          subject: subject, 
          user: req.user
        });
      }catch(err){
        console.log(err)
      }
    }, 
  getSubjectUpdatePage:async (req, res) => {
    try {
      const subjectInfo = await Subjects.findOne({
        id: req.params.id
      }).lean()
      res.render("update_subject_page.ejs", {
        subjectInfo: subjectInfo
      })
    } catch (err) {
      console.log(err)
    } 
  },
  
  createSubject: async(req, res) => {
    try{
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      await Subjects.create(
        console.log(req.body), {
        
        // user: req.user.id,
        // study: req.params.id, 
        subjPic: result.secure_url,
        cloudinaryId: result.public_id,
        subjFullName: req.body.subjFullName,
        subjStudyNum:req.body.subjStudyNum,
        dob:req.body.dob,
        // age:req.body.age,
        subjHomeAdress: req.body.subjHomeAdress,
        telephone:req.body.telephone,
        email:req.body.email,
        gender:req.body.gender,
        studyIn:req.body.studyIn,
        status:req.body.status,
      });
         console.log("Subject has been created!");
         res.redirect("/subjects");
    }catch (err) {
      console.log(err);
      }
    },
    updateSubjectInfo:async (req, res) => {
      const { id,subjFullName, status, gender, dob, telephone, email, subjHomeAdress } = req.body
      try {
        const subinfo = await Subject.findById(id).exec()

        subinfo.subjFullName = name
        subinfo.status -status
        subinfo.gender = gender
        subinfo.dob = 


        // (
        //   { id: req.params.id }, req.body, {
        //     new: true,
        //     // runValidators: true,
        // })
        // res.redirect(`/subject/${req.params.id}`);
      } catch (err) {
        console.log(err);
      }
    },
  };
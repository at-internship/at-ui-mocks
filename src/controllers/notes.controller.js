const notesCtrl = {};

// Models
const Note = require("../models/Note");

// New Note
notesCtrl.renderNoteForm = (req, res) => {
    res.render("notes/new-note");
};

notesCtrl.createNewNote = async(req, res) => {
    console.log(req.body);

    const { title, description } = req.body;
    const errors = [];

    if (!title) {
        errors.push({ text: "Please Write a Title." });
    }

    if (!description) {
        errors.push({ text: "Please Write a Description" });
    }

    if (errors.length > 0) {
        res.render("notes/new-note", {
            errors,
            title,
            description
        });
    } else {
        const newNote = new Note({ title, description });
        console.log(newNote);
        newNote.user = req.user.id;

        // await (metodo asyncrono) - no espera a que termine 
        await newNote.save(); // Guarda en la Collection
        req.flash("success_msg", "Note Added Successfully");
        res.redirect("/notes");
    }
};


// Get All Notes
notesCtrl.renderNotes = async(req, res) => {
    const notes = await Note.find({ user: req.user.id }).sort({ date: "desc" });
    res.render("notes/all-notes", { notes });
};


// Edit Notes
notesCtrl.renderEditForm = async(req, res) => {
    const note = await Note.findById(req.params.id);
    if (note.user != req.user.id) {
        req.flash("error_msg", "Not Authorized");
        return res.redirect("/notes");
    }
    res.render("notes/edit-note", { note });
};
notesCtrl.updateNote = async(req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    req.flash("success_msg", "Note Updated Successfully");
    res.redirect("/notes");
};

// Edit Notes
notesCtrl.deleteNote = async(req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Note Deleted Successfully");
    res.redirect("/notes");
};

module.exports = notesCtrl;
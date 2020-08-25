const express = require("express");
const router = express.Router();

// Controller
const {
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote
} = require("../controllers/notes.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Note
router.get("/add", isAuthenticated, renderNoteForm);
router.post("/new-note", isAuthenticated, createNewNote);

// Get All Notes
router.get("/notes", isAuthenticated, renderNotes);

// Edit Notes
router.get("/edit/:id", isAuthenticated, renderEditForm);
router.put("/edit-note/:id", isAuthenticated, updateNote);

// Delete Notes
router.delete("/delete/:id", isAuthenticated, deleteNote);

module.exports = router;

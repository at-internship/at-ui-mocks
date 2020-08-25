const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
    type: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: async v => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: prop => `${prop.value} is not a valid email addres.`,
        },
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: async v => {
                return v.length >= 4;
            },
            message: prop => "Passwords must be at least 4 characters.",
        },
    },
    dob: {
        type: Date,
        required: true,
    },
    ssn: {
        type: String,
        required: true,
        unique: true,
    },
    sex: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = model("User", UserSchema);
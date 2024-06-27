import mongoose , {model} from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img : {
        type: String,
        required: true
    },
    article : {
        type: String,
        required: true
    },
    github : {
        type: String,
        required: true
    },
    url : {
        type: String,
        required: true
    },

})

export const Project = new model("Project", projectSchema);
import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    nombresUsuario:{
        type: String,
        require: true,
        trim: true
    },
    
    celularUsuario:{
        type: Number,
        require: true,
        trim: true
    }
},{
    timestamps: true
});

const Usuario = mongoose.model("Usuario", userSchema);
export default Usuario;
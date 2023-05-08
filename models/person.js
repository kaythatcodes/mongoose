//Creation of a Person Prototype
import { Schema } from "mongoose";
import { model } from "../util/database";

const person = new Schema({
    name:{
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods:[String]
});


const Person = model("Person",person);
export default Person;
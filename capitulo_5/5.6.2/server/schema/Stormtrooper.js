import mongoose from '../config/mongoose.js'
const { Schema } = mongoose
const Stormtrooper = new Schema({
  name: String,
  nickname: String,
  divisions: [ String ],
  patent: {
    type: String,
    enum: ['General', 'Colonel', 'Major', 'Captain', 'Lieutenant', 'Sergeant', 'Soldier']
  }
})
export default Stormtrooper

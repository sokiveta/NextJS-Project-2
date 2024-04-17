import mongoose, { Schema } from 'mongoose';
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;
const ticketSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    state: String,
    zip: String,
    address: String,
    phone: String,
    email: String,
    product_pavers: String,
    product_syntheticturf: String,
    product_decking: String,
    product_pergolas: String,
    product_lighting: String,
    product_outdoorkitchens: String,
    product_bbqislands: String,
    product_firepits: String,
    product_outdoorfireplaces: String,
    product_wallspillars: String,
    product_waterfeatures: String,
    source: String,
    comments: String,
    priority: Number,
  },
  {
    timestamps: true,
  }
);
const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);
export default Ticket;

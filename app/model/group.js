'user strict'

module.defaults = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const GroupSchema = new Schema({
        name: { type: String },
        notice: { type: String },
        create_at: { type: Date, default: 0 },
        update_at: { type: Date, default: 0 },
    })

    return mongoose.model('group', GroupSchema)
}
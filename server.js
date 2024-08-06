require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded data
app.use(cors());
app.use(express.static(path.join(__dirname, 'source')));
const uri = process.env.MONGODB_URI;

// Connect to MongoDB Atlas using Mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

connectDB();

// Define database schema
const commentSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comment', commentSchema);

// Serve the HTML file
app.get('/source', (req, res) => {
  console.log('Success');
  res.sendFile(path.join(__dirname, 'source', 'index.html'));
});



// Add a new comment
app.post('/comments', async (req, res) => {
  console.log('Entered post statement');
  console.log('Received POST request:', req.body);
  const { text } = req.body;
  const newComment = new Comment({ text });

  try {
    await newComment.save();
    console.log('Comment saved:', newComment);
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// Get 3 most recent comments
app.get('/api/comments', async (req, res) =>{
    try{
        const comments = await Comment.find().sort({ createdAt: -1}).limit(3);

        res.json(comments);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
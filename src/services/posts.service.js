const Post = require('../models/post.model');

// Create a new post
const createPost = async (postData) => {
  const post = await Post.create(postData);
  return post;
};

// Get all posts
const getAllPosts = async () => {
  const posts = await Post.find().populate('author', 'username email');
  return posts;
};

// Get a single post by ID
const getPostById = async (id) => {
  const post = await Post.findById(id).populate('author', 'username email');
  return post;
};

// Update a post
const updatePost = async (id, updateData) => {
  const post = await Post.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true
  }).populate('author', 'username email');
  return post;
};

// Delete a post
const deletePost = async (id) => {
  const post = await Post.findByIdAndDelete(id);
  return post;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
};

const getAllPosts = (req, res) => {
  res.status(200).json({
    message: "All blog posts fetched successfully"
  });
};

module.exports = {
  getAllPosts
};

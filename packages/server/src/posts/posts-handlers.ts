export const handleCreatePost = async (req: any, res: any) => {
  const { title, content, published } = req.body;
  res.send(title);
};

export const handleGetPosts = async (req: any, res: any) => {
  res.status(200).send();
};

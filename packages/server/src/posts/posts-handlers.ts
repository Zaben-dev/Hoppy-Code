export const handleCreatePost = async (req: any, res: any) => {
  const { title, content, published } = req.body;
  res.send(title);
};

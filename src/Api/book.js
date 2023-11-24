import instance from ".";

const getAllBooks = async () => {
  const res = await instance.get("/allbooks");
  return res.data;
};

export { getAllBooks };
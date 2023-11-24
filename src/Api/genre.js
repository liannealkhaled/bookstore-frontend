import instance from ".";

const getAllGenre = async () => {
  const res = await instance.get("/allgenre");
  return res.data;
};

const addGenre = async () => {
  const res = await instance.post("/addGenre");
  return res.data;
};
export { getAllGenre, addGenre };

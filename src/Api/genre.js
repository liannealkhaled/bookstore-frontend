import instance from ".";

const getAllGenre = async () => {
  const res = await instance.get("/allgenre");
  return res.data;
};

// const addGenre = async ()=>{

// }
export { getAllGenre };

import instance from ".";

const getAllBooks = async () => {
  const res = await instance.get("/allbooks");
  return res.data;
};

const addBook = async (book) => {
  const formData = new FormData();
  for (let key in book) {
    formData.append(key, book[key]);
  }
  const res = await instance.post("/book", formData);
  return res.data;
};
export { getAllBooks, addBook };

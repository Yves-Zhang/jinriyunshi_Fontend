import query from "..";

// http://localhost:3000/api/lunar/index

export const getLunar = async () => {
  return query('http://127.0.0.1:3000/api/lunar/index', 'POST');
}
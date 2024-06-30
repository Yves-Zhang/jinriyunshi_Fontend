import query from "..";

// http://localhost:3000/api/lunar/index

export const getLunar = async () => {
  return query('http://192.168.1.102:3000/api/lunar/index', 'POST');
}
const getData = async () => {
  let response = await fetch("http://localhost:3000/api/radios")
    .then((res) => res.json())
    .then((r) => r);
  return response;
};

export default getData;

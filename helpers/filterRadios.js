const filterRadios = (radios, city, name) => {
  console.log(radios, city, name);
  console.log(radios.length);
  if (radios.length > 0) {
    let filteredRadios = radios;
    if (city != "") {
      filteredRadios = filteredRadios.filter((r) => r.ciudad == city);
    }
    if (name != "") {
      filteredRadios = filteredRadios.filter((r) =>
        r.page.toLowerCase().includes(name.toLowerCase())
      );
    }
    return filteredRadios;
  }
};

export default filterRadios;

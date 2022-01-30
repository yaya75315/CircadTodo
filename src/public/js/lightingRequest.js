const changeState = (status, url) => {
  const data = { ct: status };

  fetch(url, { method: "PUT", body: JSON.stringify(data) })
    .then((response) => {
      if (!response.ok) {
        throw Error("Network request failed");
      }
      return response;
    })
    .then((d) => d.json())
    .then((d) => {
      console.log("d:", d);
      // this.requestFailed = false;
      // this.fetchData();
    });
};

export { changeState };

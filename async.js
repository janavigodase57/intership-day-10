function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

async function fetchData() {
  const result = await getData();
  console.log(result);
}

fetchData();

console.log("Program continues...");
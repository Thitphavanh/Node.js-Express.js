// Function Download File

const url1 = "kong.dev/file1.json";
const url2 = "kong.dev/file2.json";
const url3 = "kong.dev/file3.json";

function downloading(url, callback) {
  console.log(`Downloading ${url}`);
  setTimeout(() => {
    callback(url);
  }, 1000);
}

downloading(url1, function complete(result) {
  console.log(`Download ${result} Completed!`);
  downloading(url2, function (result) {
    console.log(`Download ${result} Completed!`);
    downloading(url3, function (result) {
      console.log(`Download ${result} Completed!`);
    });
  });
});

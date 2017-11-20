module.exports = {
  scrape: function(url = "") {
    if(url === "")
      throw new Error("Please Provide a URL")
      return new Promise((resolve, reject) => {
        resolve('test');
      });
  }
};
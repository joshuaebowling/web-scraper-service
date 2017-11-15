module.exports = {
  scrape: function(url = "") {
    if(url === "")
      throw new Error("Please Provide a URL")
      return new Promise(
        response => resolve('test'),
        err => reject(err)
      );
  }
};
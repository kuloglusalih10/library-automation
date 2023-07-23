exports.get_main = async (req, res) => {
  res.render("index.ejs", {
    title: "Anasayfa",
  });
};

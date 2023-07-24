exports.get_main = async (req, res) => {
  res.render("index.ejs", {
    title: "Anasayfa",
  });
};

exports.get_login = async (req,res) => {
  res.render("login.ejs",{
    title : "Giriş Yap"
  })
}

exports.post_login = async (req,res) => {

  console.log(req.body)
  res.redirect("/register")
}

exports.get_register = async(req,res) => {
  res.render("register.ejs", {
    title: "Kayıt Ol"
  })
}

exports.post_register = async(req,res) => {

  const [email, username, password] = req.body
  

  console.log(req.body)
  res.redirect("/login")

}

let controller = {
    index: (req, res) => {
        res.render("index")
    },
    admin: (req, res) => {
        res.render("admin")
    }
}

module.exports = controller 

class NewsController {
    index(req, res) {
        res.render('news')
    }

    show(req, res) {
        res.send('news Details')
    }
}
module.exports = new NewsController;
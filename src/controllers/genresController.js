const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': async (req, res) => {
        let genres = await db.Genre.findAll()
        res.render('genresList', {genres})
    },
    'detail': async (req, res) => {
        let genre = await db.Genre.findByPk(req.params.id)
        res.render('genresDetail', {genre})
    }
}

module.exports = genresController;
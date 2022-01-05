const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    list: async (req, res) => {
        let genres = await db.Genre.findAll()
        res.status(200).json({
            meta: {
                status: 200,
                total: genres.length,
                url: "api/genres"
            },
            data: genres
        })
    },
    detail: async (req, res) => {
        let genre = await db.Genre.findByPk(req.params.id)
        res.status(200).json({
            meta: {
                status: 200,
                url: "api/genres/detail/" + req.params.id
            },
            data: genre
        })
    }
}

module.exports = genresController;
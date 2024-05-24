const db = require("../../database/models");
const { Op } = require("sequelize");

const genresApiController = {
    list: (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                let response = {
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: "api/genres"
                    },
                    data: genres
                }
                res.json(response)
            })
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                let response = {
                    meta: {
                        status: 200,
                        total: genre.length,
                        url: "api/genres"
                    },
                    data: genre
                }
                res.json(response)
            })
    }
}

module.exports = genresApiController
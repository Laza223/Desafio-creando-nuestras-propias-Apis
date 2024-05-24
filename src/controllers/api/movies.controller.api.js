const db = require("../../database/models");

const moviesApiController = {

    list: (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                let response = {
                    meta: {
                        status: 200,
                        total: movies.length,
                        url: "api/movies"
                    },
                    data: movies
                }
                res.json(response)
            })
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                let response = {
                    meta: {
                        status: 200,
                        total: movie.length,
                        url: "api/movies"
                    },
                    data: movie
                }
                res.json(response)
            })
    },
    create: (req, res) => {
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        })
            .then(movie => {
                let response = {
                    meta: {
                        status: 200,
                        total: movie.length,
                        url: "api/movies"
                    },
                    data: movie
                }
                res.json(response)
            })
    },
    delete: (req, res) => {
        db.Movie.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(movie => {
                let response = {
                    meta: {
                        status: 200,
                        total: movie.length,
                        url: "api/movies"
                    },
                    data: movie
                }
                res.json(response)
            })
    }
}

module.exports = moviesApiController
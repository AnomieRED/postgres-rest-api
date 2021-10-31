const Postgres = require('../database/postgres');

class Post {
	async createPost(req, res) {
		try {
			const { title, content, person_id } = req.body;
			const addPost = await Postgres.query(
				'INSERT INTO post (title, content, person_id) VALUES ($1, $2, $3) RETURNING *',
				[title, content, person_id]
			);
			res.status(201).json(addPost.rows[0]);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}

	async getPostByUser(req, res) {
		try {
			const id = req.query.id;
			const userPost = await Postgres.query(
				'SELECT * FROM post WHERE person_id = $1',
				[id]
			);
			res.status(200).json(userPost.rows);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
}

module.exports = new Post();

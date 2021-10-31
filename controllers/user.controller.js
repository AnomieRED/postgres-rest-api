const Postgres = require('../database/postgres');

class Controller {
	async createUser(req, res) {
		try {
			const { name, surname } = req.body;
			const newUser = await Postgres.query(
				'INSERT INTO person (name, surname) values ($1, $2) RETURNING *',
				[name, surname]
			);

			res.status(201).json(newUser.rows[0]);
		} catch (error) {
			res.status(500).send({ error: error.message });
		}
	}

	async getUsers(req, res) {
		try {
			const allUsers = await Postgres.query('SELECT * FROM person');
			res.status(200).json(allUsers.rows);
		} catch (error) {
			res.status(500).send({ error: error.message });
		}
	}

	async getOneUser(req, res) {
		try {
			const id = req.params.id;
			const userId = await Postgres.query(
				'SELECT * FROM person WHERE id = $1',
				[id]
			);
			res.status(200).json(userId.rows[0]);
		} catch (error) {
			res.status(500).send({ error: error.message });
		}
	}

	async updateUser(req, res) {
		try {
			const { id, name, surname } = req.body;
			const updateUser = await Postgres.query(
				'UPDATE person SET name = $1, surname = $2 WHERE id = $3 RETURNING name, surname',
				[name, surname, id]
			);
			res.status(200).json(updateUser.rows[0]);
		} catch (error) {
			res.status(500).send({ error: error.message });
		}
	}

	async deleteUser(req, res) {
		try {
			const id = req.params.id;
			const deleteUser = await Postgres.query(
				'DELETE FROM person WHERE id = $1 RETURNING *',
				[id]
			);
			res.status(200).json(deleteUser.rows[0]);
		} catch (error) {
			res.status(500).send({ error: error.message });
		}
	}
}

module.exports = new Controller();

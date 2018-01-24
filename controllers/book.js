import loadDatabase from '../config/datasource';
const Book = loadDatabase().models.Books;

exports.getAllBooks = (req, res) => {
	Book.findAll({})
		.then(result => res.status(200).send(result))
		.catch(err => res.status(500).send(err));
}; 


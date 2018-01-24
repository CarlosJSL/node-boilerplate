import bookController from '../controllers/book';

module.exports = (app) => {
	
	app.get('/api/book', bookController.getAllBooks);
};
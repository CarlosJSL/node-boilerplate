import sinon from 'sinon';
import booksController from '../../controllers/book';
import Book from '../../models/book';

describe('test', ()  =>{
	it('should pass',  () => {
    
		booksController.getAllBooks(req,response)
			.then((res) => {
				console.log(res);
			});
	});
});
import sinon from 'sinon';
import booksController from '../../controllers/book';
import Book from '../../models/book';
import httpMocks from 'node-mocks-http';

describe('test',   ()  =>{
	it('should pass',  async () => {
		const request = httpMocks.createRequest();
		const response = httpMocks.createResponse();

		 await booksController.getAllBooks(request, response);

		 sinon.assert.match(response._getData(), []);
	});
});
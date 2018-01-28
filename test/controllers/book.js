import sinon from 'sinon';
import booksController from '../../controllers/book';
import Book from '../../models/book';
import httpMocks from 'node-mocks-http';

describe('test', ()  =>{
	it('should pass',  () => {
		
		const req = httpMocks.createRequest();
		const response = httpMocks.createResponse();
		const expectedResponse = [];

		const getAllBooksFake = sinon.stub(booksController, 'getAllBooks');

		getAllBooksFake.withArgs({}).resolves(expectedResponse);

		booksController.getAllBooks(req,response)
			.then((res) => {
				console.log(res);
			});
	});
});
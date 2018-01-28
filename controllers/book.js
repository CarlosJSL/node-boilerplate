import bookRepository from '../repositories/book';

exports.getAllBooks =  async  (req, res) =>  {
	try {
		const result =  await bookRepository.findAll();
		res.status(200).send(result);

	} catch (err) {
		res.status(500).send({message: 'Ocorreu um erro durante o processamento da requisição'});
	}
}; 


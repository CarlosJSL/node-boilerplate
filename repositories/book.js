import loadDatabase from '../config/datasource';
const Book = loadDatabase().models.Books;

exports.findAll = () => {
    return  Book.findAll({})
                .then(result => result)
                .catch(err => err);
}
export default(sequelize, DataType) => {
	const Book = sequelize.define('Books', {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataType.STRING,
			allowNull: false,
		},
	});

	return Book;
};
  
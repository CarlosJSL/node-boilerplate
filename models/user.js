export default(sequelize, DataType) => {
	const Person = sequelize.define('persons', {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataType.STRING,
			allowNull: false,
		},
		age: {
			type: DataType.INTEGER,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		email: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
	});
  
	return Person;
};
  
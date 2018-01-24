
export const normalizePort = (val) => {
	let port = (typeof val === 'string') ? parseInt(val) : val;
	if (isNaN(port)) return val;
	else if (port >= 0) return port;
	else return false;
};

export const onError = (server) => {
	return (error) => {
		
		let port = error.port;
		if (error.syscall !== 'listen') throw error;
		let bind = (typeof port === 'string') ? `pipe ${port}` : `port ${port}`;
		switch(error.code) {
		case 'EACCES':
			console.error(`############### ${bind} requires elevated privileges ###############`);
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(`############### ${bind} is already in use ###############`);
			process.exit(1);
			break;
		default:
			throw error;
		}
	};
};

export const onListening = (server) => {
	return () => {
		let addr = server.address();
		let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
		console.log(`Listening at ${bind}...`);
	};
};
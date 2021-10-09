const run = async () => {
	let connection = new Telnet();

	// these parameters are just examples and most probably won't work for your use-case.
	let params = {
		host: "192.168.10.1",
		port: 2356,
		timeout: 10000,
		username: "xxxxx",
		password: "yyyyyy",
	};

	try {
		await connection.connect(params);
		let res = await connection.exec("uptime");
		console.log("async result:", res);
	} catch (error) {
		console.log("error:", error);
		// handle the throw (timeout)
	}
};
run();

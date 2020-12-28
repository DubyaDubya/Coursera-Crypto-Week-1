if (process.argv.length != 4)
	return null;

const cipherText1 = Buffer.from(process.argv[2], 'hex');
const cipherText2 = Buffer.from(process.argv[3], 'hex');
return (cipherText1.toString('hex'));

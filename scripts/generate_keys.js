import { generateKeyPairSync } from 'crypto';
import fs from 'fs';
import path from 'path';

const generateKeys = () => {
  // Generate a new key pair
  const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
  });

  // Define file paths
  const publicKeyPath = path.join(__dirname, '../keys/publicKey.pem');
  const privateKeyPath = path.join(__dirname, '../keys/privateKey.pem');

  // Write the keys to files
  fs.writeFileSync(publicKeyPath, publicKey.export({ type: 'spki', format: 'pem' }));
  fs.writeFileSync(privateKeyPath, privateKey.export({ type: 'pkcs8', format: 'pem' }));

  console.log('Keys generated and saved to /keys directory.');
};

generateKeys();

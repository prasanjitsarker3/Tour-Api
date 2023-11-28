import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.dataBaseUrl as string);
    app.listen(config.port, () => {
      console.log(`Mongoose Project Port On ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();

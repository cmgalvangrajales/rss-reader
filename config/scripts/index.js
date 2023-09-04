/* eslint-disable no-console */
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

const ENV_DIR = path.join(process.cwd(), 'src/environment');

/**
 * Create environment file
 *
 * @param { string } argEnv - Environment name
 *
 * @return Environment data
 */
const initEnv = async (argEnv) => {
  console.log('Env', argEnv);
  try {
    await fs.access(ENV_DIR);
  } catch {
    await fs.mkdir(ENV_DIR, { recursive: true }, (err) => {
      if (err) {
        console.log(chalk.red('[ERROR]:', err));
      }
    });
  }

  const sourcePath = path.resolve(`config/environments/env.${argEnv}.ts`);
  const destination = path.resolve(`${ENV_DIR}/env.ts`);

  fs.copyFile(sourcePath, destination, (err) => {
    if (err) {
      console.log(chalk.red('[ERROR]:', error));
    } else {
      console.log(chalk.green('[Success]:', 'Environment copied correctly'));
    }
  });

  return 'ok';
};

const argEnv = process.env.ENV || 'local';
initEnv(argEnv);

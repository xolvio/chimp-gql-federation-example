/* eslint-disable import/no-extraneous-dependencies, max-lines */
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const graphQLHost = 'http://localhost:4000/graphql';

async function downloadSchema(outputFile = 'schema.graphql') {
  exec(
    `npx apollo client:download-schema --excludes=src/**/* --endpoint=${graphQLHost} ${outputFile}`,
  )
    // eslint-disable-next-line no-console
    .then(() => console.log('Schema saved successfully'))
    .catch(e =>
      // eslint-disable-next-line no-console
      console.log('Unable to access local graphql-gateway', e),
    );
}

downloadSchema();

import shelljs from "shelljs";

// http://localhost:8090/v3/api-docs.yaml todolist
// http://localhost:8091/v3/api-docs.yaml todoitems

const API_URL = "http://localhost:8091/v3/api-docs.yaml";
const API_DIR = "generated/external-apis";
shelljs.rm("-rf", API_DIR);
shelljs.mkdir("-p", API_DIR);
shelljs.exec(
  `java --add-opens java.base/java.util=ALL-UNNAMED -jar ../swagger-codegen-cli.jar generate -l typescript-fetch -o ${API_DIR} -i ${API_URL}`,
);

shelljs.sed(
  "-i",
  /import \* as portableFetch from "portable-fetch";/,
  'import * as portableFetch from "node-fetch";',
  `./${API_DIR}/api.ts`,
);

const TMP_FILE = `./${API_DIR}/api.ts.tmp`;

// Step 1: Write the new line to the temporary file.
shelljs.echo("// @ts-nocheck").to(TMP_FILE);

// Step 2: Append the original file's content to the temporary file.
shelljs.cat(`./${API_DIR}/api.ts`).toEnd(TMP_FILE);

// Step 3: Replace the original file with the temporary file.
shelljs.mv(TMP_FILE, `./${API_DIR}/api.ts`);
// rm -rf __generated_api__ && mkdir __generated_api__ && java -jar ../swagger-codegen-cli.jar generate -l typescript-fetch -i http://localhost:8091/v3/api-docs.yaml -o __generated_api__

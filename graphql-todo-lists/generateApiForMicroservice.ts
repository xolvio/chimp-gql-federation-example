import shelljs from "shelljs";

// http://localhost:8090/v3/api-docs.yaml todolist
// http://localhost:8091/v3/api-docs.yaml todoitems

const API_URL = "http://localhost:8090/v3/api-docs.yaml";
const API_DIR = "generated/external-apis";
shelljs.rm("-rf", API_DIR);
shelljs.mkdir("-p", API_DIR);
shelljs.exec(
  `java -jar ../swagger-codegen-cli.jar generate -l typescript-fetch -i ${API_URL} -o ${API_DIR}`
);

shelljs.sed(
  "-i",
  /import \* as portableFetch/,
  "import portableFetch",
  `./${API_DIR}/api.ts`
);

// rm -rf __generated_api__ && mkdir __generated_api__ && java -jar ../swagger-codegen-cli.jar generate -l typescript-fetch -i http://localhost:8091/v3/api-docs.yaml -o __generated_api__

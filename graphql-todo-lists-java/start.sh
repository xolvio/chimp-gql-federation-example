API="http://localhost:8090/v3/api-docs.yaml"
java -jar ../openapi-generator-cli.jar generate -i $API -g kotlin --additional-properties=dateLibrary=string

./gradlew bootRun

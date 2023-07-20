API="http://localhost:8091/v3/api-docs.yaml"
java -jar ../openapi-generator-cli.jar generate -i $API -g kotlin --additional-properties=dateLibrary=string

./gradlew bootRun

const fs = require('fs');

const {CodeGenerator} = require('@himenon/openapi-typescript-code-generator');

const main = () => {
    const codeGenerator = new CodeGenerator('./src/api-docs/v1/api.yml');
    const code = codeGenerator.generateTypeDefinition();
    fs.writeFileSync('./src/api-types/v1/types.ts', code, { encoding: 'utf-8' });
};

main();

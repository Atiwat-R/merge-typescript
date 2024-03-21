# merge-typescript

This TypeScript code merges 3 arrays into one sorted array.

The 3 input arrays have the following properties:
- collection1 & collection3 is sorted min -> max
- collection2 is sorted max -> min

Use:
- TypeScript
- Jest (ts-jest)

How to run locally:
- First, after downloading the repo, install all packages
    - npm install 
- To run merge.ts you can use 
    - npm run dev
- Or a more specific command to run merge.ts
    - npx ts-node ./src/merge.ts
- To run Unit Tests in merge.test.ts
    - npm test

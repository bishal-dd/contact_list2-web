---
to: src/mocks/mutations/<%= fileName %>/index.ts
unless_exists: true
---
// Generated by `yarn new:mutationMock`
export * from './<%= queryTypeName %>Mutation'

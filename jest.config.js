// eslint-disable-next-line no-undef
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['./test/jestsetup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.jest.json',
        },
    },
};

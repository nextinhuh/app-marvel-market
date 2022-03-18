module.exports = {
    preset: "jest-expo",
    testPathIgnorePatterns: [
        "/node_modules",
        "/android",
        "/ios"
    ],
    setupFilesAfterEnv: [
        "jest-styled-components",
        "@react-native-async-storage/async-storage/jest/async-storage-mock"
    ]
}

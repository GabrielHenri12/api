module.exports = {
    all: true,
    extends: "@istanbuljs/nyc-config-typescript",
    exclude: [
      'src/tests',
      'src/database/config',
    ],
    include: ['src/**/*.ts']
  };
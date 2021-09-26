module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "airbnb/hooks", "plugin:json/recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["json"],
  overrides: [
    // Allow devDependencies to be imported in vite.config.js
    {
      files: ["vite.config.js"],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
      },
    },
  ],
};

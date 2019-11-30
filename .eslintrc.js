module.exports = {
  root: true,
  plugins: ["prettier", "json"],
  extends: ["airbnb-base", "prettier"],
  env: { browser: true },
  rules: {
    "prettier/prettier": "error"
  }
};

const plugins = [
  [
    "babel-plugin-direct-import",
    { modules: ["@mui/material", "@mui/icons-material"] },
  ],
];

const presets = ["@babel/preset-env", "@babel/preset-react"];

module.exports = { plugins, presets };

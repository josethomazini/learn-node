module.exports = {
  apps: [
    {
      name: "learn-node-pm2-project",
      script: "src/index.js",
      out_file: "./learn-node-pm2-project-out.log",
      error_file: "./learn-node-pm2-project-error.log",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
}

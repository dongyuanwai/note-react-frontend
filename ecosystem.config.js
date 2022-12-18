module.exports = {
    apps: [
      {
        name: 'note-react-frontend',
        script: 'note-react-frontend-server.js'
      },
    ],
    deploy: {
      production: {
        user: 'root',
        host: '43.143.134.60/',
        ref: 'origin/master',
        repo: 'git@github.com:dongyuanwai/note-react-frontend.git',
        path: '/note-react-frontend',
        'post-deploy': 'git reset --hard && git checkout master && git pull && npm i --production=false && pm2 startOrReload ecosystem.config.js', // -production=false 下载全量包
        env: {
          NODE_ENV: 'production'
        }
      }
    }
  }
const { spawn } = require('node:child_process');

const backend = spawn('node', ['apps/backend/app.js'], { stdio: 'inherit', shell: true });
const frontend = spawn('npm', ['--workspace', 'apps/frontend', 'run', 'dev', '--', '--host', '0.0.0.0'], {
    stdio: 'inherit',
    shell: true
});

function stopAll() {
    backend.kill();
    frontend.kill();
    process.exit(0);
}

process.on('SIGINT', stopAll);
process.on('SIGTERM', stopAll);

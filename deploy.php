<?php
namespace Deployer;

require 'recipe/common.php';

// Config

set('repository', 'git@github.com:telepath-php/docs.git');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts

host('telepath-php.dev')
    ->set('remote_user', 'telepath')
    ->set('deploy_path', '~/telepath-php.dev');

// Hooks

after('deploy:update_code', 'deploy:build');
after('deploy:failed', 'deploy:unlock');

// Tasks

desc('Builds project');
task('deploy:build', function() {
    cd('{{release_path}}');
    run('bun install && bun run build');
});
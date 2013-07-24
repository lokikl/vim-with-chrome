# VIM with chrome #

VIM shortcut / autocmd to reload the entire page in chrome, or just the style once files changed.

This plugin will call the Chrome Remote Debugging Protocol v1.0 with nodejs.

Javascript plugin chrome-remote-interface is used for talking to chrome.


## Installation ##

I recommand you to install this plugin with Vundle, just add this line to your .vimrc:

    Bundle "loki-nkl/vim-with-chrome"

Install javascript plugins:

    cd ~/.vim/bundle/vim-with-chrome/plugin
    npm install mstring
    npm install chrome-remote-interface


## Usage ##

Start your chrome with remote debugging enabled.

    google-chrome --remote-debugging-port=9222

Or you may want to have a command line alias to start it.

    alias chromed="google-chrome --remote-debugging-port=9222 & ; disown ; exit"

Now open your website with host including "localhost", "127.0.0.1" or "192.168".

Whenever you modified your css, scss or sass files, stylesheets on your webpage will be reloaded.

When you modified javascript, html or erb files, the entire page will be reloaded instead.

You may also manually trigger the full page reload by <leader>p.

# VIM with chrome #

VIM shortcut / autocmd to reload the entire page in chrome, or just the style.

This plugin will call the [Remote Debugging Protocol v1.0] (https://developers.google.com/chrome-developer-tools/docs/protocol/1.0/) with nodejs.

Javascript library [chrome-remote-interface] (https://github.com/cyrus-and/chrome-remote-interface) is used for talking to chrome.

No need to start any daemons.


## Installation ##

You may install this plugin with [Vundle] (https://github.com/gmarik/vundle), simply add a line to your .vimrc and execute BundleInstall.

    Bundle "loki-nkl/vim-with-chrome"

You also need to install 2 javascript library in order to talk to Chrome through websocket.

    cd ~/.vim/bundle/vim-with-chrome/plugin
    npm install mstring
    npm install chrome-remote-interface


## Usage ##

Start your chrome with remote debugging enabled.

    google-chrome --remote-debugging-port=9222

Now please open your website in chrome. Please be noted that hostname other than "localhost", "127.0.0.1" or "192.168.*.*" will be ignored. And the chrome dev tool should be closed.

That's it. Now whenever you modified your css, scss or sass files in vim, local stylesheets on your webpage will be reloaded.

When you modified javascript, html or erb files, the entire page will be reloaded instead.

You may also manually trigger the full page reload by `<leader>p`.

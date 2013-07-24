"
" Author: Loki Ng
" Date: 23 July 2013
"
if !exists("g:vim_with_chrome")
  let g:vim_with_chrome = 1
endif

" derive path of the node js script
let s:dirname = expand('<sfile>:h')
let s:script = join([s:dirname, 'reload_css.js'], '/')

" map <leader>p to whole page reload
nnoremap <leader>p :call ReloadChromeCurrentTab('')<cr>

" do style only reload when changed stylesheet
autocmd BufWritePost *.css,*.scss,*.sass call ReloadChromeCurrentTab('style-only')

" do whole page reload when changed js / html
autocmd BufWritePost *.js,*.html,*.erb call ReloadChromeCurrentTab('')

" call the node js script to send command to chrome
function! ReloadChromeCurrentTab(args)
  exec 'silent ! node ' . s:script . ' ' . a:args . ' &'
endfunction


# ZSH

~/.zshrc

## ZSH Navigation Hotkeys

| Hotkey    | Action                                  |
| --------- | --------------------------------------- |
| `Ctrl+A`  | Move cursor to beginning of line        |
| `Ctrl+E`  | Move cursor to end of line              |
| `Alt+B`   | Move cursor backward one word           |
| `Alt+F`   | Move cursor forward one word            |
| `Ctrl+U`  | Delete from cursor to beginning of line |
| `Ctrl+K`  | Delete from cursor to end of line       |
| `Ctrl+W`  | Delete word before cursor               |
| `Alt+D`   | Delete word after cursor                |
| `Ctrl+L`  | Clear screen (preserves current line)   |
| `Ctrl+C`  | Abort current command                   |
| `Tab`     | Auto-complete command or filename       |
| `Tab Tab` | Show all possible completions           |

## Plugin Hotkeys

### History & Search

| Hotkey       | Action                                                                    |
| ------------ | ------------------------------------------------------------------------- |
| `Ctrl+R`     | Fuzzy search command history with fzf                                     |
| `↑/↓`        | Cycle through commands containing current text (history-substring-search) |
| `Alt+C`      | Fuzzy change directory with fzf                                           |
| `**` + `Tab` | Fuzzy file selection with fzf (e.g., `vim **<Tab>`)                       |

### Auto-suggestions

| Hotkey            | Action                    |
| ----------------- | ------------------------- |
| `→` (right arrow) | Accept current suggestion |
| `End`             | Accept current suggestion |
| `Ctrl+F`          | Accept current suggestion |

### Directory Navigation (dirhistory plugin)

| Hotkey  | Action                                      |
| ------- | ------------------------------------------- |
| `Alt+←` | Go to previous directory                    |
| `Alt+→` | Go to next directory                        |
| `Alt+↑` | Go up one directory (equivalent to `cd ..`) |
| `Alt+↓` | Go to selected child directory              |

### Z plugin

| Command          | Action                                             |
| ---------------- | -------------------------------------------------- |
| `z partial_name` | Jump to frequently used directory matching pattern |
| `z -l pattern`   | List matching directories with scores              |

## Common Aliases

### Directory Navigation

| Alias  | Command       | Usage                   |
| ------ | ------------- | ----------------------- |
| `..`   | `cd ..`       | Go up one directory     |
| `...`  | `cd ../..`    | Go up two directories   |
| `....` | `cd ../../..` | Go up three directories |
| `~`    | `cd ~`        | Go to home directory    |

### File Listing

| Alias  | Command                                        | Usage                                     |
| ------ | ---------------------------------------------- | ----------------------------------------- |
| `ls`   | `exa --group-directories-first`                | List files with directories first         |
| `ll`   | `exa --icons --group-directories-first -la`    | Detailed list with icons and hidden files |
| `la`   | `exa --icons --group-directories-first -a`     | List all files with icons                 |
| `tree` | `exa --tree --icons --group-directories-first` | Display directory tree with icons         |

### File Viewing

| Alias | Command                               | Usage                                       |
| ----- | ------------------------------------- | ------------------------------------------- |
| `cat` | `batcat --paging=never --style=plain` | View file contents with syntax highlighting |

### Web Development

| Alias   | Command           | Usage                            |
| ------- | ----------------- | -------------------------------- |
| `serve` | `npx serve`       | Serve current directory via HTTP |
| `hs`    | `npx http-server` | Alternative static file server   |
| `nrd`   | `npm run dev`     | Run dev script                   |
| `nrs`   | `npm run start`   | Run start script                 |
| `nrb`   | `npm run build`   | Build project                    |
| `ni`    | `npm install`     | Install dependencies             |

### Git Workflows

| Alias | Command         | Usage                                 |
| ----- | --------------- | ------------------------------------- |
| `gs`  | `git status`    | Check repo status                     |
| `ga`  | `git add`       | Stage files (e.g., `ga .`)            |
| `gc`  | `git commit -m` | Commit changes (e.g., `gc "Fix bug"`) |
| `gp`  | `git push`      | Push to remote                        |
| `gl`  | `git pull`      | Pull from remote                      |
| `gco` | `git checkout`  | Switch branches                       |
| `gb`  | `git branch`    | List branches                         |
| `gst` | `git stash`     | Stash changes                         |
| `gsp` | `git stash pop` | Apply stashed changes                 |

## Custom Functions

| Function      | Usage               | Description                     |
| ------------- | ------------------- | ------------------------------- |
| `mkcd newdir` | `mkcd project-name` | Create directory and cd into it |

## Command Help

| Command        | Usage      | Description                           |
| -------------- | ---------- | ------------------------------------- |
| `tldr command` | `tldr tar` | Show simplified examples for commands |
| `man command`  | `man find` | Show full manual for commands         |

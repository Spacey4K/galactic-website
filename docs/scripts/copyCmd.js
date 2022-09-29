const cmds = document.getElementsByClassName("Cmd");

[...cmds].forEach((cmd) => {
    cmd.addEventListener('click', (e) => {
        const text = e.target.innerText;
        navigator.clipboard.writeText(text);
        alert(`Copied "${text}" to clipboard`)
    });
});
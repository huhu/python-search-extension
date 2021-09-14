class HelpCommand extends Command {
    constructor() {
        super("help", "Show the help messages.")
    }

    onExecute() {
        const value = {
            "tips1": `Tips: You can use shortcut ${c.match("Cmd")}/${c.match("Ctrl")} + ${c.match("L")} to autofocus the address bar`,
            "tips2": `Tips: Combine ${c.match("Cmd")} or ${c.match("Alt")} with ${c.match("Enter")} to open the search result in the new tab`,
            ":": `Prefix ${c.match(":")} to execute command (:help, :update, etc)`,
        };
        return Object.entries(value).map(([key, description], index) => {
            return { content: key, description };
        });
    }
}
const c = new Compat();
(async() => {
    const commandManager = new CommandManager(
        new HelpCommand(),
        new HistoryCommand(),
    );

    const defaultSuggestion = `Python Search Extension`;
    const omnibox = new Omnibox(defaultSuggestion, c.omniboxPageSize());

    omnibox.bootstrap({
        onSearch: (query) => {
            return searcher.search(query);
        },
        afterNavigated: (query, result) => {
            // Ignore the command history
            if (query && query.startsWith(":")) return;

            HistoryCommand.record(query, result);
        },
        onEmptyNavigate: (content, disposition) => {
            commandManager.handleCommandEnterEvent(content, disposition);
        },
    });

    omnibox.addPrefixQueryEvent(":", {
        onSearch: (query) => {
            return commandManager.execute(query);
        },
    });

})();

const fileNewIssue = "title=Have you found a bug? Did you feel something was missing?&body=Whatever it was, we'd love to hear from you.";
chrome.runtime.setUninstallURL(
    `https://github.com/huhu/python-search-extension/issues/new?${encodeURI(fileNewIssue)}`
);
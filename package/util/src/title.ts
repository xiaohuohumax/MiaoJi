interface Title {
    pre: string,
    title: string,
    after: string
}

const dTitle: Title = {
    pre: '',
    title: '',
    after: ''
};

export function updateTitle(title: Partial<Title>) {
    Object.assign(dTitle, title);
    document.title = `${dTitle.pre}•${dTitle.title}•${dTitle.after}`;
}
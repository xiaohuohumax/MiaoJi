import { dateEnUS, enUS } from 'naive-ui';

const lang: I18nSchema = {
    meta: {
        name: 'en-US',
        description: 'English'
    },
    comment: {
        button: {
            refresh: 'Refresh',
            retry: 'Retry',
            more: 'More',
            search: 'Search'
        },
        span: {
            createAt: 'Create',
            updateAt: 'Update'
        }
    },
    menu: {
        search: 'Search',
        menu: 'Menu',
        home: 'Home',
        doc: 'Doc',
        about: 'About',
        label: 'Label',
        communication: 'Communication',
        link: 'Link',
        history: 'History',
        photo: 'Photo',
        notFound: '404 Not Found',
        lang: 'Language',
        theme: 'Theme'
    },
    page: {
        home: {
            subtitle: 'Doc'
        },
        doc: {
            subtitle: 'Doc',
            commentsTitle: 'Comments',
        },
        about: {
            subtitle: 'About',
            commentsTitle: 'Comments',
            noPageTip: 'No found about page!'
        },
        label: {
            subtitle: 'Label',
        },
        communication: {
            subtitle: 'Communication',
            commentsTitle: 'Communication',
            noPageTip: 'No found communication page!'
        },
        link: {
            subtitle: 'Link',
            gotoApply: 'Go apply'
        },
        history: {
            subtitle: 'History'
        },
        photo: {
            subtitle: 'Photo',
        },
        photoDetails: {
            subtitle: 'Photo',
            commentsTitle: 'Comments',
        },
        notFound: {
            communication: 'There\'s nothing here',
        }
    },
    layout: {
        header: {
            search: {
                title: 'Search',
                radioLabel: 'Label',
                radioDoc: 'Doc',
                radioPhoto: 'Photo',
                noMatchContext: 'No matching content was found!',
            }
        }
    },
    component: {
        cOver: {
            context: 'No more'
        },
        cComments: {
            hiddenContext: '{title} is hideen!',
            gotoComment: 'Go {title}'
        },
        cLoading: {
            success: '{name} query success!',
            fail: '{name} query fail!',
        }
    },
    router: {
        title: {
            home: 'Home',
            doc: 'Doc',
            about: 'About',
            label: 'Label',
            communication: 'Communication',
            link: 'Link',
            history: 'History',
            photo: 'Photo',
            photoDetails: 'Photo',
            notFound: '404 not Found',
        }
    },
    api: {
        error: {
            network: 'Network error!',
            unauthorized: 'Unauthorized!',
            rateLimit: 'Rate limit!',
            forbidden: 'Forbidden!',
            notFound: '404 not found!',
            unprocessableEntity: 'Validation params error!'
        }
    },
    naiveUi: {
        locale: enUS,
        dateLocale: dateEnUS
    }
};

export default lang;
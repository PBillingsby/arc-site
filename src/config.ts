import { IURLView } from "./types";

import { AccountAll } from "./views/Account/AccountAll";
// import { AccountNew } from "./views/Account/AccountNew";
import { AccountBookmarks } from "./views/Account/AccountBookmarks";
import { AccountContributions } from "./views/Account/AccountContributions";

import * as urls from "./urls";
import { LANGUAGE } from "./language";

export const TAGS = {
    keys: {
        artifactName: "Artifact-Name",
        artifactType: "Artifact-Type",
        ansTitle: "Title",
        bookmarkIds: "Bookmark-Ids-Tag",
        bookmarkSearch: "Alex-Bookmark-Search",
        dateCreated: "Date-Created",
        keywords: "Keywords",
        initialOwner: "Initial-Owner",
        poolId: "Pool-Id",
        uploaderTxId: "Uploader-Tx-Id"
    },
    values: {
        defaultArtifactType: "Alex-Default",
        messagingArtifactType: "Alex-Messaging",
        webpageArtifactType: "Alex-Webpage"
    }
}

export const APP = {
    locale: "en"
}

export const ASSET_SRC = "/assets";

export const ASSETS = {
    artifact: `${ASSET_SRC}/artifact.svg`,
    artifactTypes: {
        default: `${ASSET_SRC}/artifact-types/webpage.svg`,
        messaging: `${ASSET_SRC}/artifact-types/messaging.svg`,
        webpage: `${ASSET_SRC}/artifact-types/webpage.svg`
    },
    bookmark: `${ASSET_SRC}/bookmark.svg`,
    bookmarkSelected: `${ASSET_SRC}/bookmark-selected.svg`,
    close: `${ASSET_SRC}/close.svg`,
    collection: `${ASSET_SRC}/collection.svg`,
    copy: `${ASSET_SRC}/copy.svg`,
    cycle: `${ASSET_SRC}/cycle.png`,
    data: `${ASSET_SRC}/data.svg`,
    disconnect: `${ASSET_SRC}/disconnect.svg`,
    dropdown: `${ASSET_SRC}/dropdown.svg`,
    faviconDark: `${ASSET_SRC}/favicon-dark.svg`,
    faviconLight: `${ASSET_SRC}/favicon-light.svg`,
    infoGraphic: `${ASSET_SRC}/info-graphic.png`,
    logo: `${ASSET_SRC}/logo.svg`,
    logoAlt: `${ASSET_SRC}/logo-alt.svg`,
    logoAltActive: `${ASSET_SRC}/logo-alt-active.svg`,
    logoAlt1: `${ASSET_SRC}/logo-alt-1.svg`,
    logoAlt2: `${ASSET_SRC}/logo-alt-2.svg`,
    menu: `${ASSET_SRC}/menu.svg`,
    mint: `${ASSET_SRC}/mint.svg`,
    owner: `${ASSET_SRC}/owner.svg`,
    share: `${ASSET_SRC}/share.svg`,
    user: `${ASSET_SRC}/user.svg`,
}

export const TAB_OPTIONS = {
    details: LANGUAGE.details,
    view: LANGUAGE.view
}

export const ARTIFACT_TABS = [
    {
        label: TAB_OPTIONS.view
    },
    {
        label: TAB_OPTIONS.details
    }
]

export const ARTIFACT_TYPES = {
    [TAGS.values.defaultArtifactType]: {
        label: LANGUAGE.default,
        icon: ASSETS.artifactTypes.default
    },
    [TAGS.values.messagingArtifactType]: {
        label: TAGS.values.messagingArtifactType,
        icon: ASSETS.artifactTypes.messaging
    },
    [TAGS.values.webpageArtifactType]: {
        label: TAGS.values.webpageArtifactType,
        icon: ASSETS.artifactTypes.webpage
    }
}

export const DOM = {
    loader: "loader-portal",
    modal: "modal-portal",
    notification: "notification-portal"
};

// export const URLS: IURLView = {
//     account: [
//         { index: 0, label: LANGUAGE.account.all.title, icon: "account-all.svg", disabled: false, url: urls.accountAll, view: AccountAll },
//         { index: 1, label: LANGUAGE.account.new.title, icon: "account-new.svg", disabled: true, url: urls.accountNew, view: AccountNew },
//         { index: 2, label: LANGUAGE.account.bookmarks.title, icon: "account-bookmarks.svg", disabled: true, url: urls.accountBookmarks, view: AccountBookmarks },
//         { index: 2, label: LANGUAGE.account.contributions.title, icon: "account-contributions.svg", disabled: false, url: urls.accountContributions, view: AccountContributions }
//     ]
// }

export const URLS: IURLView = {
    account: [
        { index: 0, label: LANGUAGE.account.all.title, icon: "account-all.svg", disabled: false, url: urls.accountAll, view: AccountAll },
        { index: 2, label: LANGUAGE.account.bookmarks.title, icon: "account-bookmarks.svg", disabled: false, url: urls.accountBookmarks, view: AccountBookmarks },
        { index: 2, label: LANGUAGE.account.contributions.title, icon: "account-contributions.svg", disabled: false, url: urls.accountContributions, view: AccountContributions }
    ]
}

export const ID_LENGTH = 43;
export const PAGINATOR = 100;

export const STORAGE = {
    none: "N/A",
    pending: "pending",
    txUpdate: "txUpdate"
}
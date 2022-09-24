import { IURLView } from "./types";

import { AccountAll } from "./views/Account/AccountAll";
import { AccountNew } from "./views/Account/AccountNew";
import { AccountFavorites } from "./views/Account/AccountFavorites";
import { AccountContributions } from "./views/Account/AccountContributions";

import * as urls from "./urls";
import { LANGUAGE } from "./language";

export const APP = {
    locale: "en"
}

export const DOM = {
    modal: "modal-portal"
  };

export const STYLING = {
    cutoffs: {
        initial: "1024px",
        tablet: "840px",
        secondary: "540px",
        banner: "1200px",
        max: "1400px"
    },
    dimensions: {
        buttonHeight: "33.5px",
        buttonWidth: "150px",
        navHeight: "70px",
    }
}

export const URLS: IURLView = {
    account: [
        { index: 0, label: LANGUAGE.account.all.title, icon: "account-all.svg", disabled: false, url: urls.accountAll, view: AccountAll },
        { index: 1, label: LANGUAGE.account.new.title, icon: "account-new.svg", disabled: true, url: urls.accountNew, view: AccountNew },
        { index: 2, label: LANGUAGE.account.favorites.title, icon: "account-favorites.svg", disabled: true, url: urls.accountFavorites, view: AccountFavorites },
        { index: 2, label: LANGUAGE.account.contributions.title, icon: "account-contributions.svg", disabled: false, url: urls.accountContributions, view: AccountContributions }
    ]
}
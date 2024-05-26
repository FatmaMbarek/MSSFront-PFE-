import { SettingState, SettingDefaultState } from "../../model/setting.model"
export const initialState: SettingState = {
  "saveLocal": "sessionStorage",
    "storeKey": "quisetting-angular",
    "setting": {
        "app_name": {
            "value": "STBPAY"
        },
        "theme_scheme_direction": {
            "value": "ltr"
        },
        "theme_scheme": {
            "value": "light"
        },
        "theme_color": {
            "colors": {
              
              "--{{prefix}}primary": "#2185F4",
              "--{{prefix}}secondary": "#B1BBC6",
              "--{{prefix}}tertiray": "#3FF0B9"
            },
            "value": "theme-color-default"
        },
        "theme_font_size": {
            "value":  "theme-fs-sm"
        },
        "page_layout": {
            "value": "container"
        },
        "sidebar_color": {
            "value": "sidebar-white"
        },
        "sidebar_type": {
            "value": []
        },
        "sidebar_menu_style": {
            "value": "sidebar-default navs-rounded-all"
        }
    }
}



// Default Setting State
export const defaultState: SettingDefaultState = {
    "saveLocal": "sessionStorage",
    "storeKey": "quisetting-angular",
    "setting": {
        app_name: {
          target: '[data-setting="app_name"]',
          choices: [],
          type: "text",
          value: "STBPAY",
        },
        theme_scheme_direction: {
          target: "html",
          choices: ["ltr", "rtl"],
          type: "layout_design",
          value: "ltr",
        },
        theme_scheme: {
          target: "body",
          choices: ["light", "dark", "auto"],
          type: "layout_design",
          value: "light",
        },
        theme_color: {
          target: "body",
          choices: [
            "theme-color-blue",
            "theme-color-gray",
            "theme-color-red",
            "theme-color-yellow",
            "theme-color-pink",
            "theme-color-purpel",
            "theme-color-default",
           
          ],
          type: "default",
          colors: {
            "--{{prefix}}primary": "#2185F4",
            "--{{prefix}}secondary": "#B1BBC6",
            "--{{prefix}}tertiray": "#3FF0B9"
          },
          value: "theme-color-default",
        },
        theme_font_size: {
          target: "html",
          choices: ["theme-fs-sm", "theme-fs-md", "theme-fs-lg"],
          type: "layout_design",
          value: "theme-fs-sm",
        },
        page_layout: {
          target: "#page_layout",
          choices: ["container", "container-fluid"],
          type: "layout_design",
          value: "container",
        },
        sidebar_color: {
          target: '[data-toggle="main-sidebar"]',
          choices: [
            "sidebar-white",
            "sidebar-dark",
            "sidebar-color",
            "sidebar-transparent",
          ],
          type: "layout_design",
          value: "sidebar-white",
        },
        sidebar_type: {
          target: '[data-toggle="main-sidebar"]',
          choices: ["sidebar-hover", "sidebar-mini", "sidebar-boxed"],
          type: "layout_design",
          value: [],
        },
        sidebar_menu_style: {
          target: '[data-toggle="main-sidebar"]',
          choices: [
            "sidebar-default navs-rounded",
            "sidebar-default navs-rounded-all",
            "sidebar-default navs-pill",
            "sidebar-default navs-pill-all",
            "left-bordered",
          ],
          type: "layout_design",
          value: "left-bordered",
        }
      }
}

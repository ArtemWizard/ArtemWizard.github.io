let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Samara, Russia',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "work",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [{
        name: "work",
        links: [
          {
            name: "gmail",
            url: "https://mail.google.com/mail/u/0/#inbox",
            icon: "brand-gmail",
            icon_color: "#a9b665",
          },
          {
            name: "canva",
            url: "https://www.canva.com/",
            icon: "align-box-left-stretch",
            icon_color: "#7daea3",
          },
        ],
      }, {
        name: "video",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
        ],
      }, {
        name: "smth. in the future",
        links: [

        ],
      }],
    },




    {
      name: "rpg",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "dice",
              url: "https://dnddiceroller.org/ru",
              icon: "dice-6",
              icon_color: "#ea6962",
            },
            {
              name: "Long Story Short",
              url: "https://longstoryshort.app/",
              icon: "chart-area",
              icon_color: "#7daea3",
            },
            {
              name: "ДнД.су",
              url: "https://dnd.su/",
              icon: "books",
              icon_color: "#89b482",
            },
            {
              name: "YouTube",
              url: "https://www.youtube.com/?app=desktop&hl=ru",
              icon: "brand-youtube",
              icon_color: "#d3869b",
            },
          ],
        },
        {
          name: "online games",
          links: [
            {
              name: "Roll20",
              url: "https://roll20.net/welcome",
              icon: "device-laptop",
              icon_color: "#d3869b",
            },
            {
              name: "token stamp",
              url: "https://rolladvantage.com/tokenstamp/",
              icon: "components",
              icon_color: "#a9b665",
            },
            {
              name: "Watch 2 Gether",
              url: "https://rolladvantage.com/tokenstamp/",
              icon: "music",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "pictures",
          links: [
            {
              name: "pinterest",
              url: "https://ru.pinterest.com/",
              icon: "brand-pinterest",
              icon_color: "#7daea3",
            },
            {
              name: "2-Minute Tabletop",
              url: "https://2minutetabletop.com/dungeondraft/",
              icon: "map",
              icon_color: "#e78a4e",
            },
            {
              name: "Fusion Brain",
              url: "https://fusionbrain.ai/editor/",
              icon: "map-star",
              icon_color: "#e78a4e",
            },
          ],
        },
      ],
    },



    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
          ],
        },
        {

          name: "resources",
          links: [
            {
              name: "deepseek",
              url: "https://chat.deepseek.com/",
              icon: "brand-openai",
              icon_color: "#7daea3",
            },
            {
              name: "translator",
              url: "https://translate.google.com/?hl=ru&sl=ru&tl=en&op=translate",
              icon: "transform",
              icon_color: "#e1e1e1",
            },
            {
              name: "YouTube",
              url: "https://www.youtube.com/?app=desktop&hl=ru",
              icon: "brand-youtube",
              icon_color: "#EA6962FF",
            },
            {
              name: "Figma",
              url: "https://www.figma.com/files/team/1382946656583199344/drafts?fuid=1382946652090942259",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
          ],
        },
        {
          name: "",
          links: [

          ],
        },
      ],
    },




    {
      name: "more",
      background_url: "src/img/banners/bg-2.gif",
      categories: [
        {
          name: "            ",
          links: [
            {
              name: "`_`",
              url: "",
              icon: "",
              icon_color: "",
            },
          ],
        },
        {
          name: "It`s",
          links: [
            {
              name: "EMPTY",
              url: "",
              icon: "",
              icon_color: "",
            },
            {
              name: "NOW",
              url: "",
              icon: "",
              icon_color: "",
            },
          ],
        },
        {
          name: "",
          links: [

          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();

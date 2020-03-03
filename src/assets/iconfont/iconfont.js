import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('iconfont.eot?t=1583201042028'); /* IE9 */
    src: url('iconfont.eot?t=1583201042028#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('iconfont.woff?t=1583201042028') format('woff'),
    url('iconfont.ttf?t=1583201042028') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1583201042028#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-music:before {
    content: "\e8b2";
  }

  .icon-pause:before {
    content: "\e607";
  }

  .icon-close-copy:before {
    content: "\e609";
  }

  .icon-menu-on:before {
    content: "\e7af";
  }

  .icon-play:before {
    content: "\e668";
  }

  .icon-play1:before {
    content: "\e604";
  }

  .icon-toast_icon_right:before {
    content: "\e788";
  }

  .icon-search:before {
    content: "\e622";
  }

  .icon-left:before {
    content: "\e69d";
  }

  .icon-right:before {
    content: "\e6a1";
  }

  .icon-music1:before {
    content: "\e621";
  }

  .icon-more:before {
    content: "\e615";
  }

  .icon-close:before {
    content: "\e65c";
  }

  .icon-icon-white-search:before {
    content: "\e616";
  }

  .icon-menu:before {
    content: "\e63d";
  }

  .icon-Music:before {
    content: "\e617";
  }

  .icon-icon_top:before {
    content: "\e693";
  }

  .icon-Music_kugou:before {
    content: "\e502";
  }
`
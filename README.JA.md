# かなたんボタン - 天音かなたのボイスボタン

![Version](https://img.shields.io/github/package-json/v/oruyanke/kanata-button?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/oruyanke/kanata-button?style=flat-square)
![Starts](https://img.shields.io/github/stars/oruyanke/kanata-button?style=flat-square)

README: [中文](https://github.com/oruyanke/kanata-button/blob/master/README.md) | **日本語** | [English](https://github.com/oruyanke/kanata-button/blob/master/README.EN.md)

> 新生かなたんボタンサイトへようこそ！かなたんの総合ファンページを目指しますー

ホームページ https://vbup-osc.github.io/kanata-button

<!-- 関連リンク:

* [天音かなたのYouTubeチャンネル](https://www.youtube.com/channel/UCZlDXzGoo7d44bwdNObFacg)
* [天音かなたのBilibiliチャンネル](https://space.bilibili.com/491474048)
* [天音かなたのTwitter](https://twitter.com/amanekanatach) -->

## 計画中の機能

- 生放送や動画のカレンダーを表示
<!-- - フブキのスタンプ/ミーム -->
- YouTube/Bilibiliのデータを表示

## このプロジェクトへの貢献(コントリビュート)

GitHubの開発に直接参加する方法が分からない場合は、素材や意見を直接以下のメールアドレスに送信してください。([開発者メールへ](mailto:13626941473@qq.com))。またメールの中にタイトル、内容及びあなたのID（Bilibili、Twitterやその他）を記述してください。そうすることで私達は下のコントリビューターリストにあなたの名前を掲載することができます。

もしくは素材や意見をGitHubの[Issues](https://github.com/copperion/kanata-button/issues) ページに送ることもできます。メールの場合と同じようにタイトルと内容を記述してください。

もしGitHubでの開発方法を知っている場合は、プロジェクトをフォークして変更してください。変更が完了したら、プルリクエストしてください。各項目の編集に関しては以下に記述されています。

### 音声の追加または修正

音声データはmp3のビットレート128Kbpsで統一し、`static/voices/`に保存してください。対応するURLは`/voices/`に入れてください。

すべての音声データのメタデータは`assets/voices.json`に追加または修正をしてください。

音声を変更する場合は変更後に変更前のファイルを削除してください。音声ファイルは，必ず過去を含め現在のファイル名と同じものであってはなりません。

### 翻訳

日本語と英語の翻訳が必要です！

ボタンなどのテキストの翻訳は `assets/locales/` 内に各言語に対応した3つの.jsonファイルがあります。

音声のタイトルテキストファイルは `aseets/voices.json` 内にあります。

## ローカルでのデプロイ

ローカル開発環境をデプロイする
このサイトはVue + NuxtJS + Vuetifyを使用して開発しています。

ローカル開発環境をデプロイするためには、まず最新版のNodeとYarnをインストールしてください。その後、以下の手順に従ってください。

 1. コードをforkしてクローンする。
 2. コードディレクトリに移動し、yarnを実行して依存関係をインストールする。
 3. `yarn dev`を実行し、`localhost:3000`でローカル開発サーバーを起動する。ローカル開発サーバーでは、変更した結果をすぐに反映させることが可能です。
 4. デプロイ用ファイルをコンパイルするためには、`yarn generae`を実行して`dist`ディレクトリを生成してください。このサイトは完全に静的なので、distディレクトリ全体を直接デプロイすることができます。

## コントリビューター

開発:

- [孤独のイオン](https://github.com/lonelyion)
- [Asrui Morus](https://github.com/Morxi)

オーディオクリップ：

- Bilibili 风之门
- Bilibili キルケー
- Bilibili 魂喵

翻訳：

- Bilibili ★AYO★
- Bilibili [森绮](https://space.bilibili.com/6140610)
- Bilibili [ものもー](https://space.bilibili.com/2921731)
- Bilibili [鱼板](https://space.bilibili.com/39261924)
- GitHub [茶目](https://github.com/Cyame)

イラスト：

- Bilibili [Dazeroyuu](https://space.bilibili.com/463153)

特別協力：

- [VTuber Music](https://vtbmusic.com)
- Bilibili [天音かなたオフィシャル](https://space.bilibili.com/491474048)
- Bilibili [天音彼方陶芸工場](https://space.bilibili.com/54139629)
- [天音梧桐](https://space.bilibili.com/31565151)
- そして、GitHubでこのプロジェクトに参加した以下の方々

[![GitHub Contributors](https://contributors-img.web.app/image?repo=oruyanke/fubuki-button)](https://github.com/oruyanke/fubuki-button/graphs/contributors)[![GitHub Contributors](https://contributors-img.web.app/image?repo=oruyanke/kanata-button)](https://github.com/oruyanke/kanata-button/graphs/contributors)

## LICENCE

プログラム： [MIT License](https://github.com/oruyanke/kanata-button/blob/master/LICENSE)

<!-- 音声: [Hololive 二次创作条款](https://www.hololive.tv/terms) -->

このプロジェクトはファンによるもので、Hololive公式は一切関係ありません

## サポート

### BrowserStack

Proudly using BrowserStack.

[![](https://i.loli.net/2017/09/27/59cbc16b0f8b4.png)](https://www.browserstack.com/)

> **BrowserStack** is a cloud-based cross-browser testing tool that enables developers to test their websites across various browsers on different operating systems and mobile devices, without requiring users to install virtual machines, devices or emulators.

### GitHub Pages

This project is deployed using GitHub Pages.

<!-- ### Vercel

Powered by Vercel.

[![vercel.png](https://i.loli.net/2020/07/18/rPah8FVmqBXL6dj.png)](www.vercel.com)

> **​Vercel** is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host Jamstack websites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration. -->

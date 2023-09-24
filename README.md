This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## 学習メモ

・yarn.dev で開始<br>
・css ファイル名は.module.css で終わる必要がある<br>
・global な css は「app.js」 に書く必要がある。（app.js は全体の app を上書きする）<br>
・同様に document.js もある。head とか。<br>
参考<br>
https://qiita.com/tetsutaroendo/items/c7171286137d963cdecf

<br>
・getStaticProps　はビルド時に実行される。また、page内でのみエクスポートできる。頻繁に変わるデータには向かない<br>
・一方、getServerSidePropsはリクエスト時に呼び出されるため、

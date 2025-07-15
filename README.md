# React ECサイトプロジェクト

このプロジェクトは、Reactと様々な最新ウェブ技術を学び、応用するために作られたEコマースウェブサイトです。

https://loquacious-valkyrie-d4fbcc.netlify.app/
## 主な機能

- **ユーザー認証**: Firebase Authenticationを利用した会員登録およびログイン機能
![img1](https://github.com/user-attachments/assets/0974bacc-9c30-462d-807e-eab4befa7bbe)
- **商品一覧**: カテゴリー別に分類された商品を閲覧できるショッピングページ
![img2](https://github.com/user-attachments/assets/dd0c6675-d7a2-4ae9-8d72-68ff13ea3c91)
- **ショッピングカート**: 商品の追加、削除、数量の調整が可能なショッピングカート機能
![img3](https://github.com/user-attachments/assets/3de64412-1394-497b-9bc3-1e4c6cb5e7e5)
- **決済システム**: Stripe APIと連携し、実際のカード決済をシミュレートできるチェックアウト機能
![img4](https://github.com/user-attachments/assets/49a9d0af-aece-4505-9bd1-df8bf21ad89b)
- **状態の永続化**: `redux-persist`を使用し、リロードしてもログイン状態やカートの中身が維持されます
- **サーバーレスバックエンド**: Netlify Functionsを利用して決済ロジックを安全に処理

## 使用技術スタック

### Frontend
- **React**: ユーザーインターフェース構築のための基本フレーム워크
- **React Router**: ページ間の動的ルーティング管理
- **Redux**: 予測可能な状態管理のためのライブラリ
  - `react-redux`: ReactとReduxを接続
  - `redux-thunk`: 非同期アクション処理のためのミドルウェア
  - `redux-persist`: ストアの状態をローカルストレージに保存し、永続化
  - `reselect`: メモ化されたセレクターを作成し、パフォーマンスを最適化
- **Styled-components**: コンポーネントベースのCSS-in-JSスタイリング
- **Sass**: CSSプリプロセッサ

### Backend & Deployment
- **Firebase**: ユーザー認証(Authentication)及びデータベース(Firestore)のためのBaaS
- **Stripe**: 安全な決済処理のためのAPI
- **Netlify**: フロントエンドのデプロイ及びサーバーレス関数(Functions)のホスティング

## このプロジェクトからの学び
このプロジェクトを通じて、Reactの主要な概念（コンポーネント、フック、状態管理）や、Reduxを用いた複雑な状態管理、そしてFirebaseやStripeといった外部サービスとの連携方法を学ぶことができました。
### **Reactの基礎 (React Basics)**
-   コンポーネントベースのアーキテクチャの理解と実践。
-   `props`を通じたコンポーネント間のデータ伝達方法。
-   JSX構文と、関数コンポーネント内での状態管理・ライフサイクルの扱い方。

### **React Hooks**
-   `useState`: コンポーネントのローカル状態管理。
-   `useEffect`: APIリクエストやイベントリスナーの設定など、副作用の処理。
-   `useDispatch`, `useSelector`: Reduxストアの状態取得とアクション実行。
-   `useParams`: React Routerの動的ルートからパラメータを取得。
-   `useNavigate`: プログラムによるページ遷移の実装。

### **React Router**
-   `react-router-dom` v6を用いた宣言的なページルーティング設定。
-   `<Routes>`, `<Route>`, `<Outlet>` を活用したネストされたルート構造の構築。
-   動的ルート（例: `/shop/:category`）を用いたパラメータの受け渡しと、それに応じたコンポーネントの表示。

### **Redux (状態管理)**
-   アクション(Action)、レデューサー(Reducer)、ストア(Store)からなるFluxアーキテクチャの理解。
-   `redux-thunk`ミドルウェアを用いた非同期処理（APIからのデータ取得など）の実装方法。
-   `reselect`ライブラリを利用したメモ化セレクターによるパフォーマンス最適化。
-   `redux-persist`によるブラウザリロード時のストア状態の永続化。
-   機能ごと（`user`, `cart`, `categories`）にファイルを分割する実践的な状態管理構造。

### **CSS in JS**
-   `styled-components`を用いたコンポーネント単位でのスタイリング手法。
-   `props`をスタイル定義に渡し、動的なCSSを生成する方法。
-   グローバルスタイルとコンポーネントスコープのスタイルの共存。

### **Firebase (BaaS)**
-   **Authentication**: Eメール/パスワード認証およびGoogleソーシャルログイン機能の実装。
-   **Firestore**: NoSQLデータベースを利用した商品データやユーザー情報の保存・取得。
-   `onAuthStateChanged`を利用したユーザーの認証状態のリアルタイム監視と、アプリ状態への反映。

### **API連携とサーバーレス (API & Serverless)**
-   **Stripe API**: `react-stripe-js`とサーバーレス関数を連携させた、安全な決済フローの構築。
-   **Netlify Functions**: クライアントに公開できないAPIキーをバックエンドで安全に扱い、必要な結果のみを返すためのサーバーレスAPIエンドポイントの作成・利用方法。

### **Context API**
-   このプロジェクトではグローバルな状態管理にReduxを主に使用しましたが、Reduxの`<Provider>`コンポーネントはReactのContext APIが基盤となっています。この経験を通じて、Context APIの基本的な役割と、Reduxのようなより高機能な状態管理ライブラリがどのような場面で有効になるかの判断基準を学びました。

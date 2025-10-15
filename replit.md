# 北海道旅行 Webアプリケーション

## プロジェクト概要
恋人との特別な北海道旅行のための、スタイリッシュでモダンなWebアプリケーション。カウントダウンタイマーと4泊5日の旅行しおりを管理できます。

## 主な機能

### 1. カウントダウンページ（トップページ）
- 北海道の美しい風景写真を背景に配置
- 旅行までの日数をリアルタイムでカウントダウン表示（日、時間、分、秒）
- ダークモード対応
- レスポンシブデザイン

### 2. 旅行しおりページ
- 5日間（1日目〜5日目）のタブ形式ナビゲーション
- 各日ごとに予定を追加・編集・削除可能
- 予定の詳細情報：
  - 時間（HH:MM形式）
  - タイトル
  - メモ（任意）
  - 写真アップロード（任意）
- 写真のプレビューとモーダル表示
- 空の状態の美しいUI

## 技術スタック

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- Wouter (ルーティング)
- TanStack Query (データフェッチング)
- React Hook Form + Zod (フォーム管理)

### Backend
- Express.js
- TypeScript
- In-memory storage (MemStorage)
- Multer (画像アップロード)

### デザイン
- カラースキーム：北海道の空と夕日をイメージした青とオレンジ
- タイポグラフィ：Inter (本文) + Playfair Display (見出し)
- ダークモード完全対応
- レスポンシブデザイン

## ファイル構造

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── theme-provider.tsx
│   │   │   ├── theme-toggle.tsx
│   │   │   ├── activity-card.tsx
│   │   │   └── activity-dialog.tsx
│   │   ├── pages/
│   │   │   ├── countdown.tsx
│   │   │   └── itinerary.tsx
│   │   ├── App.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   ├── storage.ts
│   ├── routes.ts
│   └── index.ts
├── shared/
│   └── schema.ts
└── design_guidelines.md
```

## API エンドポイント

- `GET /api/activities` - すべての予定を取得
- `POST /api/activities` - 新しい予定を作成
- `PATCH /api/activities/:id` - 予定を更新
- `DELETE /api/activities/:id` - 予定を削除
- `POST /api/upload` - 画像をアップロード

## データモデル

### Activity
```typescript
{
  id: string;
  day: number; // 1-5
  time: string; // HH:MM形式
  title: string;
  description?: string;
  imageUrl?: string;
}
```

## 開発

```bash
npm run dev
```

アプリケーションはポート5000で起動します。

## 最新の変更（2025年10月15日）

- カウントダウンページの実装完了
- 旅行しおりページの実装完了
- 予定の追加・編集・削除機能
- 画像アップロード機能
- ダークモード対応
- 完全なレスポンシブデザイン
- すべてのコンポーネントにdata-testid属性を追加
- デザインガイドラインに完全準拠

## ユーザー設定

- デフォルト旅行日：2025年6月15日（countdown.tsxで変更可能）
- カラーテーマ：自動切り替え可能なライト/ダークモード
- LocalStorageでテーマ設定を保存

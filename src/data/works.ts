export type WorkItem = {
  id: string;
  title: string;
  client?: string;
  summary: string;
  url: string;
  tags: string[];
  notes?: string[];
  isLegacy?: boolean; // 旧アカウント判別用
};

export const works: WorkItem[] = [
  {
    id: "parktown-kiyose63",
    title: "ParkTown 清瀬63 物件サイト",
    client: "Kenroku Web",
    summary: "既存デザインを活かしつつ、導線／情報設計の調整と表示品質の最適化。LPとしての見やすさと回遊性を重視。",
    url: "https://www.kenroku-web.com/parktown/kiyose63/",
    tags: ["LP", "フロント実装", "導線改善"],
  },
  {
    id: "tokyo-orc-member",
    title: "東京お茶の水ロータリークラブ 会員サイト",
    client: "Tokyo ORC",
    summary: "会員向けページのデザイン修正。既存トーンを崩さず、読みやすさと操作性を改善。",
    url: "https://tokyo-orc.jp/",
    tags: ["会員サイト", "デザイン修正", "UI/UX"],
    notes: ["会員領域は非公開のため、公開URLはクラブサイトを記載。"],
  },
  {
    id: "hinokiya-z",
    title: "檜家住宅 TECHNOLOGY Z（特設ページ）",
    client: "Hinokiya",
    summary: "特設ページの表現・演出の調整。現在は内容が更新されている前提での実装担当。",
    url: "https://www.hinokiya.jp/tecnology/z/",
    tags: ["特設", "演出", "フロント調整"],
    notes: ["過去の公開時の演出・フロントエンド実装を担当。"],
  },
  {
    id: "github-current",
    title: "GitHub (Current)",
    summary: "現在メインで利用中のアカウント。個人開発や技術検証のリポジトリを公開しています。",
    url: "https://github.com/Ro969Be",
    tags: ["GitHub", "OSS", "Develop"],
  },
  {
    id: "github-legacy",
    title: "GitHub (Legacy)",
    summary: "過去のアカウント（参照用）。ログイン不可のため更新停止中ですが、過去のコード資産として公開。",
    url: "https://github.com/Mori-Chan",
    tags: ["Archive"],
    isLegacy: true,
    notes: ["現在は参照専用です。"],
  },
  {
    id: "qiita",
    title: "Qiita",
    summary: "Discord Botの音声関係の記事をアップ。",
    url: "https://qiita.com/Mori-chan",
    tags: ["Qiita"],
  },
];
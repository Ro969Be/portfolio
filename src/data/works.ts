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
    title: "ParkTown 清瀬63｜物件サイト作成",
    client: "Kenroku Web",
    summary: "既存パンフレットのデザインを活かしながら、導線と情報設計を改善。LPとしての視認性・回遊性を最適化。",
    url: "https://www.kenroku-web.com/parktown/kiyose63/",
    tags: ["LP", "フロント実装", "導線改善"],
  },
  {
    id: "meister-c",
    title: "マイスターカンパニー｜Webサイト制作",
    client: "Kenroku Web",
    summary:
      "ワイヤーフレーム設計からデザイン制作、コーディングまで一貫して対応。",
    url: "https://www.meister-c.com/",
    tags: ["Webサイト制作", "フロントエンド実装"],
  },
  {
    id: "tokyo-orc-member",
    title: "お茶の水ロータリークラブ｜会員サイト改修",
    client: "Tokyo ORC",
    summary: "会員向けページのデザイン修正。読みやすさと操作性を向上。",
    url: "https://tokyo-orc.jp/",
    tags: ["会員サイト", "デザイン修正", "UI/UX"],
    notes: ["会員領域は非公開のため、公開URLはクラブサイトを記載。"],
  },
  {
    id: "hinokiya-z",
    title: "檜家住宅 Z空調｜特設ページデザイン改修",
    client: "Hinokiya",
    summary: "特設ページの演出・表示調整を担当。ブランドイメージを保ちながら表現品質を改善。",
    url: "https://www.hinokiya.jp/tecnology/z/",
    tags: ["特設", "演出", "フロント調整"],
    notes: ["過去の公開時の演出・フロントエンド実装を担当。"],
  },
  {
    id: "github-current",
    title: "個人開発｜Webアプリ開発（Current）",
    summary: "現在運用中の個人開発・技術検証プロジェクトを公開。Webアプリ開発の実装例を掲載。",
    url: "https://github.com/Ro969Be",
    tags: ["GitHub", "OSS", "Develop"],
  },
  {
    id: "github-legacy",
    title: "個人開発・勉強｜過去プロジェクトアーカイブ",
    summary: "過去アカウントの開発資産をアーカイブとして公開。学習・検証プロセスを含めた記録。",
    url: "https://github.com/Mori-Chan",
    tags: ["Archive"],
    isLegacy: true,
    notes: ["現在は参照専用です。"],
  },
  {
    id: "qiita",
    title: "技術記事｜Qiita投稿一覧",
    summary: "Discord Botや音声関連技術の知見を記事として公開。技術検証内容を継続的に発信。",
    url: "https://qiita.com/Mori-chan",
    tags: ["Qiita"],
  },
];
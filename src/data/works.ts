export type WorkItem = {
  id: string;
  title: string;
  client?: string;
  summary: string;
  url: string;
  tags: string[];
  notes?: string[];
};

export const works: WorkItem[] = [
  {
    id: "parktown-kiyose63",
    title: "ParkTown 清瀬63 物件サイト",
    client: "Kenroku Web",
    summary:
      "既存デザインを活かしつつ、導線／情報設計の調整と表示品質の最適化。LPとしての見やすさと回遊性を重視。",
    url: "https://www.kenroku-web.com/parktown/kiyose63/",
    tags: ["LP", "フロント実装", "導線改善"],
  },
  {
    id: "tokyo-orc",
    title: "東京お茶の水ロータリークラブ",
    client: "Tokyo ORC",
    summary:
      "クラブサイトの見せ方を整備。情報のまとまり・読みやすさ・更新性を意識して調整。",
    url: "https://tokyo-orc.jp/",
    tags: ["Webサイト", "UI調整", "情報整理"],
  },
  {
    id: "tokyo-orc-member",
    title: "東京お茶の水ロータリークラブ 会員サイト（デザイン修正）",
    client: "Tokyo ORC",
    summary:
      "会員向けページのデザイン修正。既存トーンを崩さず、読みやすさと操作性を改善。",
    url: "https://tokyo-orc.jp/",
    tags: ["会員サイト", "デザイン修正", "UI/UX"],
    notes: ["会員領域は非公開のため、公開URLはクラブサイトを記載。"],
  },
  {
    id: "hinokiya-z",
    title: "檜家住宅 TECHNOLOGY Z（特設ページ）",
    client: "Hinokiya",
    summary:
      "特設ページの表現・演出の調整。現在は起用タレント等の差し替えが行われている前提。",
    url: "https://www.hinokiya.jp/tecnology/z/",
    tags: ["特設", "演出", "フロント調整"],
    notes: ["過去は斎藤工さん起用だったが現在は内容が更新されている想定。"],
  },
  {
    id: "github-current",
    title: "GitHub（現行アカウント）",
    summary:
      "現在利用中のGitHub。個人開発・検証・ポートフォリオ用のリポジトリを管理。",
    url: "https://github.com/Ro969Be",
    tags: ["GitHub", "個人開発"],
  },
  {
    id: "github-legacy",
    title: "GitHub（旧アカウント・参照用）",
    summary:
      "過去に利用していたGitHub。登録メールアドレスが使用不可になり、現在ログイン不可。",
    url: "https://github.com/Mori-Chan",
    tags: ["GitHub", "旧アカウント"],
    notes: ["ログイン不可のため更新停止。参照のみ。"],
  },
];
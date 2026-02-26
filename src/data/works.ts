export type Work = {
  id: "01" | "02" | "03" | "04";
  title: string;
  subtitle: string;
  role: string;
  scope: string[];
  outcome: string[];
  links: { label: string; href: string }[];
};

export const works: Work[] = [
  {
    id: "01",
    title: "兼六パークタウン 清瀬第63期",
    subtitle: "物件ページ / LP",
    role: "Frontend（既存ページ改修）",
    scope: ["レイアウト崩れ修正", "レスポンシブ調整", "表示/導線の微調整"],
    outcome: ["スマホでの視認性を安定化", "更新しやすい状態へ整理"],
    links: [{ label: "Live", href: "https://www.kenroku-web.com/parktown/kiyose63/" }]
  },
  {
    id: "02",
    title: "東京お茶の水ロータリークラブ",
    subtitle: "会員サイトのデザイン修正",
    role: "UI Improvement / Maintenance",
    scope: ["既存UIの整え", "文言/余白/整列の調整", "運用更新に伴う改修"],
    outcome: ["見やすさ・統一感の改善", "運用変更でも崩れにくく調整"],
    links: [{ label: "Live", href: "https://tokyo-orc.jp/" }]
  },
  {
    id: "03",
    title: "桧家住宅：Z空調ページ",
    subtitle: "ブランドページ運用・更新対応",
    role: "Frontend（更新・差し替え対応）",
    scope: ["コンテンツ差し替え", "デザイン整合性の維持", "軽微なUI調整"],
    outcome: ["更新時の見た目崩れを抑制", "ブランドトーンを維持"],
    links: [{ label: "Live", href: "https://www.hinokiya.jp/tecnology/z/" }]
  },
  {
    id: "04",
    title: "GitHub",
    subtitle: "実装・アウトプット",
    role: "Code / Projects",
    scope: ["個人開発", "実装検証", "継続的な改善"],
    outcome: ["再現性のある実装を公開", "スキルの可視化"],
    links: [
      { label: "Mori-Chan", href: "https://github.com/Mori-Chan" },
      { label: "Ro969Be", href: "https://github.com/Ro969Be" }
    ]
  }
];
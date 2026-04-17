<template>
  <div class="mr-page">
    <!-- Hero -->
    <header class="mr-hero">
      <div class="mr-hero__inner">
        <div class="mr-brand">
          <span class="mr-brand__mark" aria-hidden="true">◉</span>
          <span class="mr-brand__text">まるっとレジ</span>
        </div>
        <p class="mr-tagline">飲食店向けクラウド POS レジ SaaS</p>
        <h1 class="mr-title">
          レジは、<span class="mr-title__accent">¥0。</span><br />
          AI で売上を伸ばすなら、<br class="mr-br-mobile" />
          はじめて課金。
        </h1>
        <p class="mr-lead">
          会計・予約・KDS・インボイス対応まで、<br />
          飲食店の基本機能はすべて<strong>永久無料</strong>で使えます。<br />
          AI が発注・仕入・月次レポートを手伝ってほしくなったら、<br />
          <strong>月 ¥1,980</strong> からアップグレード。
        </p>
        <div class="mr-cta">
          <a class="mr-btn mr-btn--primary" href="#pricing">無料で今すぐ始める</a>
          <a
            class="mr-btn mr-btn--ghost"
            href="https://pos-regi-system-web.vercel.app/"
            target="_blank"
            rel="noopener"
            >デモを見る</a
          >
        </div>
        <p class="mr-cta__note">
          クレジットカード不要・永久無料プランあり・いつでも解約可能
        </p>
      </div>
    </header>

    <!-- Free plan callout -->
    <section class="mr-section mr-bg-light">
      <div class="mr-container">
        <h2 class="mr-section__title">永久無料で、全部入り。</h2>
        <p class="mr-section__sub">
          他社が有料プランに閉じ込めている機能の多くを、無料プランで解放しています。
        </p>

        <div class="mr-free-grid">
          <div class="mr-free-card">
            <span class="mr-free-card__ic" aria-hidden="true">💳</span>
            <div class="mr-free-card__title">会計・注文管理</div>
            <p class="mr-free-card__desc">件数無制限。伝票・割引・領収書 PDF まで完全対応。</p>
          </div>
          <div class="mr-free-card">
            <span class="mr-free-card__ic" aria-hidden="true">📅</span>
            <div class="mr-free-card__title">予約管理</div>
            <p class="mr-free-card__desc">テーブルレイアウト、カレンダー、タイムライン、全て無料。</p>
          </div>
          <div class="mr-free-card">
            <span class="mr-free-card__ic" aria-hidden="true">👨‍🍳</span>
            <div class="mr-free-card__title">KDS(厨房伝達)</div>
            <p class="mr-free-card__desc">ハンディで取った注文が、キッチンへ自動で届きます。</p>
          </div>
          <div class="mr-free-card">
            <span class="mr-free-card__ic" aria-hidden="true">🧾</span>
            <div class="mr-free-card__title">インボイス対応</div>
            <p class="mr-free-card__desc">登録番号表示・軽減税率(8/10%)区分・支払内訳を標準装備。</p>
          </div>
          <div class="mr-free-card">
            <span class="mr-free-card__ic" aria-hidden="true">📊</span>
            <div class="mr-free-card__title">売上レポート</div>
            <p class="mr-free-card__desc">日次・月次の売上集計、客単価、時間帯別分析。</p>
          </div>
          <div class="mr-free-card">
            <span class="mr-free-card__ic" aria-hidden="true">🔗</span>
            <div class="mr-free-card__title">予約サイト連携(1 社)</div>
            <p class="mr-free-card__desc">食べログ or ぐるなび or ホットペッパー、1 社まで無料。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI differentiator -->
    <section class="mr-section">
      <div class="mr-container">
        <h2 class="mr-section__title">
          <span class="mr-section__emoji">✨</span>
          AI で、売上を伸ばす。月 ¥1,980 から。
        </h2>
        <p class="mr-section__sub">
          無料プランで十分な店舗運営ができます。<br />
          それでもなお、"あと一歩"を踏み込みたいときに、AI があなたの右腕になります。
        </p>

        <div class="mr-ai-grid">
          <article class="mr-ai-card">
            <span class="mr-ai-card__ic" aria-hidden="true">📷</span>
            <h3 class="mr-ai-card__title">AI レシート OCR</h3>
            <p class="mr-ai-card__desc">
              仕入れレシートを iPad で撮るだけ。<br />
              日付・金額・品目を自動抽出して、<strong>会計ソフトへ自動連携</strong>。
            </p>
            <div class="mr-ai-card__save">⏱ 月 10〜20 時間の事務作業を削減</div>
          </article>

          <article class="mr-ai-card">
            <span class="mr-ai-card__ic" aria-hidden="true">📈</span>
            <h3 class="mr-ai-card__title">AI 発注予測</h3>
            <p class="mr-ai-card__desc">
              過去実績 × 天候 × 曜日から、<br />
              <strong>「明日、豚バラが 1.3 倍売れます」</strong>とアラート。
            </p>
            <div class="mr-ai-card__save">💰 食材廃棄 15% 削減、欠品回避</div>
          </article>

          <article class="mr-ai-card">
            <span class="mr-ai-card__ic" aria-hidden="true">🧾</span>
            <h3 class="mr-ai-card__title">AI 月次レポート</h3>
            <p class="mr-ai-card__desc">
              月末、税理士に渡す資料を <strong>1 クリックで生成</strong>。<br />
              売上 / 客単価 / 時間帯別 / 客層動向を要約。
            </p>
            <div class="mr-ai-card__save">⏱ 月末作業 3 時間 → 10 分</div>
          </article>

          <article class="mr-ai-card">
            <span class="mr-ai-card__ic" aria-hidden="true">💬</span>
            <h3 class="mr-ai-card__title">AI 予約返信テンプレ</h3>
            <p class="mr-ai-card__desc">
              食べログ・ぐるなび予約への返信を、<br />
              お客様の<strong>過去来店履歴を加味した下書き</strong>を自動生成。
            </p>
            <div class="mr-ai-card__save">⏱ 1 件 3 分 → 30 秒</div>
          </article>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="mr-section mr-bg-light">
      <div class="mr-container">
        <h2 class="mr-section__title">選ばれる理由</h2>

        <div class="mr-benefits">
          <article class="mr-benefit">
            <div class="mr-benefit__num">01</div>
            <h3 class="mr-benefit__title">店全体のオフライン継続(ハブモード)</h3>
            <p class="mr-benefit__desc">
              他社 POS は「端末 1 台のオフライン会計」まで。<br />
              まるっとレジは<strong>店内ハブを介して全端末が繋がり続ける</strong>ので、
              クラウド断絶時もハンディ→KDS→レジの連携が止まりません。
              <span class="mr-benefit__tier">AI Pro プラン以上</span>
            </p>
          </article>

          <article class="mr-benefit">
            <div class="mr-benefit__num">02</div>
            <h3 class="mr-benefit__title">予約サイト 4 社を、1 画面で</h3>
            <p class="mr-benefit__desc">
              食べログ・ぐるなび・ホットペッパー・Retty の予約を<strong>別料金なしで統合</strong>。
              新着予約、食事制限、席移動まで串刺し管理。
              <span class="mr-benefit__tier">AI Lite プラン以上</span>
            </p>
          </article>

          <article class="mr-benefit">
            <div class="mr-benefit__num">03</div>
            <h3 class="mr-benefit__title">インボイス・軽減税率、全部入り</h3>
            <p class="mr-benefit__desc">
              レシート・領収書・会計エクスポートすべてで
              <strong>登録番号表示・8%/10% 区分・支払内訳</strong>を標準対応。
              税理士が喜ぶフォーマットで月末が楽になります。
              <span class="mr-benefit__tier">無料プランから利用可</span>
            </p>
          </article>

          <article class="mr-benefit">
            <div class="mr-benefit__num">04</div>
            <h3 class="mr-benefit__title">いつでも解約・データも持ち出し可</h3>
            <p class="mr-benefit__desc">
              違約金なし、いつでも解約できます。<br />
              登録した商品マスタ・顧客データは<strong>CSV で持ち出し可能</strong>、
              ロックインを作らない設計。
              <span class="mr-benefit__tier">全プラン共通</span>
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="mr-section">
      <div class="mr-container">
        <h2 class="mr-section__title">料金プラン</h2>
        <p class="mr-section__sub">
          基本機能は<strong>永久無料</strong>。AI が必要になったら月 ¥1,980 から。
        </p>

        <div class="mr-plans">
          <article class="mr-plan mr-plan--free">
            <div class="mr-plan__badge mr-plan__badge--free">ずっと ¥0</div>
            <div class="mr-plan__name">Free</div>
            <div class="mr-plan__price">¥0<span class="mr-plan__unit">/月</span></div>
            <div class="mr-plan__target">基本機能、全員に無料で</div>
            <ul class="mr-plan__features">
              <li><strong>会計 無制限</strong></li>
              <li><strong>予約管理 無制限</strong></li>
              <li><strong>KDS・ハンディ対応</strong></li>
              <li><strong>インボイス・軽減税率</strong></li>
              <li>予約サイト 1 社連携</li>
              <li>AI OCR 月 10 回まで</li>
              <li>メールサポート(3 営業日)</li>
            </ul>
          </article>

          <article class="mr-plan">
            <div class="mr-plan__name">AI Lite</div>
            <div class="mr-plan__price">¥1,980<span class="mr-plan__unit">/月</span></div>
            <div class="mr-plan__target">AI を少し試したい</div>
            <ul class="mr-plan__features">
              <li>Free のすべて</li>
              <li>AI OCR 月 100 回</li>
              <li>AI 発注提案(週次)</li>
              <li>AI 月次レポート要約</li>
              <li>予約サイト 4 社統合</li>
              <li>サポート(翌営業日)</li>
            </ul>
          </article>

          <article class="mr-plan mr-plan--featured">
            <div class="mr-plan__badge">おすすめ</div>
            <div class="mr-plan__name">AI Pro</div>
            <div class="mr-plan__price">¥4,980<span class="mr-plan__unit">/月</span></div>
            <div class="mr-plan__target">本気でデジタル化</div>
            <ul class="mr-plan__features">
              <li>AI Lite のすべて</li>
              <li><strong>AI OCR 無制限</strong></li>
              <li><strong>AI 発注提案(日次・高精度)</strong></li>
              <li><strong>AI 予約返信テンプレ</strong></li>
              <li><strong>ハブモード</strong>(店全体オフライン)</li>
              <li>LINE 連携</li>
              <li>優先チャットサポート</li>
            </ul>
          </article>

          <article class="mr-plan">
            <div class="mr-plan__name">Business</div>
            <div class="mr-plan__price">¥9,980<span class="mr-plan__unit">/月</span></div>
            <div class="mr-plan__target">多店舗運営</div>
            <ul class="mr-plan__features">
              <li>AI Pro のすべて</li>
              <li>多店舗管理(〜5 店)</li>
              <li>AI 売上予測</li>
              <li>API アクセス</li>
              <li>専任サポート</li>
            </ul>
          </article>
        </div>

        <p class="mr-pricing__note">
          価格は税抜表記です。消費税は Stripe Tax により自動計算・請求されます。<br />
          お支払いはクレジットカード(Visa / Mastercard / JCB / American Express)。<br />
          <strong>Free プランはクレジットカード登録不要。</strong>いつでも有料プランへ変更可能・違約金なし。
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mr-section mr-bg-light">
      <div class="mr-container">
        <h2 class="mr-section__title">よくあるご質問</h2>

        <div class="mr-faq">
          <details class="mr-faq__item">
            <summary class="mr-faq__q">本当に Free プランは永久無料ですか?何か裏はありますか?</summary>
            <p class="mr-faq__a">
              はい、Free プランは完全に永久無料です。会計件数の制限も、期間制限もありません。
              私たちは「AI 機能の価値」でのみ収益を上げるビジネスモデルを選んでいます。
              無料で基本機能を十分に使っていただき、"あと一歩"で AI が必要になったときだけ課金いただく——
              それが他社との最大の違いです。
            </p>
          </details>
          <details class="mr-faq__item">
            <summary class="mr-faq__q">無料でこれだけ使えて、どうやって経営が成り立つのですか?</summary>
            <p class="mr-faq__a">
              飲食店の多くは、基本機能だけで十分運営できます。私たちはそこに無理に課金しません。
              一方、事務作業の自動化(AI OCR)、仕入最適化(AI 発注予測)、月次レポート自動生成といった
              <strong>"時間を買う"</strong>価値には、明確に対価をいただきます。
              この"対価に見合う価値"に共感いただける飲食店さまが AI プランを使われ、
              私たちも持続的に運営できる——そういう設計です。
            </p>
          </details>
          <details class="mr-faq__item">
            <summary class="mr-faq__q">本当にネットが落ちても動きますか?</summary>
            <p class="mr-faq__a">
              ハブモード(AI Pro プラン以上)をご契約時は、店内ハブが稼働する限り全端末で会計・予約・KDS が継続します。クラウド同期は復旧時に自動で行われ、衝突は updatedAt ベースで解決します。
              Free・AI Lite プランでも端末ローカルでの会計継続は可能です。
            </p>
          </details>
          <details class="mr-faq__item">
            <summary class="mr-faq__q">導入にどれくらい時間がかかりますか?</summary>
            <p class="mr-faq__a">
              Free プランは最短 30 分で開始できます。iPad と WiFi があればその場で利用可能、クレジットカード登録も不要です。ハブモード(AI Pro 以上)は店内 LAN 設定が必要で、初期訪問セットアップ(オプション)もご案内できます。
            </p>
          </details>
          <details class="mr-faq__item">
            <summary class="mr-faq__q">既存の POS から乗り換えできますか?</summary>
            <p class="mr-faq__a">
              商品マスタ・顧客データの CSV インポートに対応しています。エアレジ・スマレジのエクスポート形式は標準サポート。移行支援もご相談ください。
            </p>
          </details>
          <details class="mr-faq__item">
            <summary class="mr-faq__q">解約したいときは?</summary>
            <p class="mr-faq__a">
              違約金なし、いつでも解約可能です。有料プランは次回課金日の前日までに Stripe Customer Portal から解約手続きを行えば、翌月以降の請求は発生しません。Free プランは解約不要ですが、アカウント削除も管理画面から自由に行えます。
            </p>
          </details>
          <details class="mr-faq__item">
            <summary class="mr-faq__q">動作環境は?</summary>
            <p class="mr-faq__a">
              iPad(iOS 15 以上)・Android タブレット・モダン Web ブラウザ(Chrome / Edge / Safari 最新版)で利用できます。
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="mr-section mr-contact-section">
      <div class="mr-container">
        <h2 class="mr-section__title">お問い合わせ・導入相談</h2>
        <p class="mr-contact__lead">
          導入前の相談・デモ依頼・料金の個別見積もり、お気軽にお問い合わせください。
        </p>
        <div class="mr-contact__grid">
          <div class="mr-contact__card">
            <div class="mr-contact__label">メールでのお問い合わせ</div>
            <RouterLink class="mr-contact__value" to="/contact">contact フォームへ</RouterLink>
          </div>
          <div class="mr-contact__card">
            <div class="mr-contact__label">お電話(平日 10:00 〜 18:00)</div>
            <a class="mr-contact__value" href="tel:+817083074361">+81 70-8307-4361</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mr-footer">
      <div class="mr-container mr-footer__inner">
        <div class="mr-footer__left">
          <div class="mr-brand mr-brand--sm">
            <span class="mr-brand__mark" aria-hidden="true">◉</span>
            <span class="mr-brand__text">まるっとレジ</span>
          </div>
          <p class="mr-footer__tagline">飲食店向けクラウド POS レジ SaaS</p>
        </div>
        <div class="mr-footer__right">
          <div class="mr-footer__company">
            <strong>運営:</strong> 森井 將裕(個人事業主)<br />
            <strong>お問合せ:</strong> +81 70-8307-4361
          </div>
          <p class="mr-footer__copy">
            © 2026 Morii's Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";

// Stripe 審査向け: ページタイトルとメタ記述を「まるっとレジ」に上書き
// また、このページだけは PC サイズ (>=980px) でもスクロール可にする
// (styles.css のグローバル overflow: hidden を class で上書き)
let prevTitle = "";
onMounted(() => {
  prevTitle = document.title;
  document.title = "まるっとレジ | 飲食店向けクラウド POS レジ SaaS";

  // meta description
  let desc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
  if (!desc) {
    desc = document.createElement("meta");
    desc.name = "description";
    document.head.appendChild(desc);
  }
  desc.content =
    "まるっとレジは、基本機能が永久無料のクラウドレジ SaaS。会計・予約・KDS・インボイス対応まで ¥0 で使い放題。AI による仕入予測・OCR・月次レポート自動化は月 ¥1,980 から。クレジットカード登録不要。";

  // スクロール解放用のクラスを html / body に付与
  document.documentElement.classList.add("route-marutto-regi");
  document.body.classList.add("route-marutto-regi");
});
onBeforeUnmount(() => {
  if (prevTitle) document.title = prevTitle;
  document.documentElement.classList.remove("route-marutto-regi");
  document.body.classList.remove("route-marutto-regi");
});
</script>

<style scoped>
.mr-page {
  --mr-color-primary: #0891b2;
  --mr-color-primary-dark: #0e7490;
  --mr-color-accent: #f59e0b;
  --mr-color-text: #0f172a;
  --mr-color-text-muted: #64748b;
  --mr-color-border: #e2e8f0;
  --mr-color-bg: #ffffff;
  --mr-color-bg-light: #f8fafc;

  color: var(--mr-color-text);
  background: var(--mr-color-bg);
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Kaku Gothic ProN", "Hiragino Sans",
    "Meiryo", sans-serif;
  line-height: 1.7;
  min-height: 100vh;
}

.mr-container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ---- Hero ---- */
.mr-hero {
  background: linear-gradient(135deg, #0891b2 0%, #0e7490 50%, #155e75 100%);
  color: #fff;
  padding: 96px 24px 120px;
}
.mr-hero__inner {
  max-width: 1080px;
  margin: 0 auto;
  text-align: center;
}
.mr-brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 22px;
  margin-bottom: 8px;
}
.mr-brand__mark {
  color: var(--mr-color-accent);
  font-size: 28px;
  line-height: 1;
}
.mr-brand--sm {
  font-size: 18px;
}
.mr-brand--sm .mr-brand__mark {
  font-size: 22px;
}
.mr-tagline {
  font-size: 14px;
  letter-spacing: 0.1em;
  opacity: 0.85;
  margin: 0 0 32px;
}
.mr-title {
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 800;
  line-height: 1.3;
  margin: 0 0 24px;
}
.mr-title__accent {
  color: var(--mr-color-accent);
  font-size: 1.2em;
}
.mr-br-mobile {
  display: none;
}
@media (max-width: 640px) {
  .mr-br-mobile {
    display: inline;
  }
}
.mr-lead {
  font-size: 17px;
  opacity: 0.95;
  max-width: 720px;
  margin: 0 auto 40px;
}
.mr-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.mr-btn {
  display: inline-block;
  padding: 16px 40px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.2s;
}
.mr-btn--primary {
  background: var(--mr-color-accent);
  color: #0f172a;
}
.mr-btn--primary:hover {
  background: #d97706;
  transform: translateY(-1px);
}
.mr-btn--ghost {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.8);
}
.mr-btn--ghost:hover {
  background: rgba(255, 255, 255, 0.12);
}
.mr-cta__note {
  font-size: 13px;
  opacity: 0.8;
  margin: 0;
}

/* ---- Section ---- */
.mr-section {
  padding: 80px 0;
}
.mr-bg-light {
  background: var(--mr-color-bg-light);
}
.mr-section__title {
  text-align: center;
  font-size: clamp(24px, 3.5vw, 34px);
  font-weight: 800;
  margin: 0 0 12px;
  color: var(--mr-color-text);
}
.mr-section__sub {
  text-align: center;
  color: var(--mr-color-text-muted);
  margin: 0 0 48px;
}
.mr-section__emoji {
  font-size: 0.9em;
  margin-right: 8px;
}

/* ---- Free grid ---- */
.mr-free-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}
.mr-free-card {
  background: #fff;
  border: 1px solid var(--mr-color-border);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: transform 0.15s;
}
.mr-free-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
}
.mr-free-card__ic {
  font-size: 36px;
  display: block;
  margin-bottom: 12px;
}
.mr-free-card__title {
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 8px;
  color: var(--mr-color-text);
}
.mr-free-card__desc {
  font-size: 14px;
  color: var(--mr-color-text-muted);
  margin: 0;
  line-height: 1.6;
}

/* ---- AI grid ---- */
.mr-ai-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 40px;
}
.mr-ai-card {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border: 1px solid #bae6fd;
  border-radius: 12px;
  padding: 32px;
  position: relative;
  overflow: hidden;
}
.mr-ai-card::before {
  content: "";
  position: absolute;
  top: -40px;
  right: -40px;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(8, 145, 178, 0.12) 0%, transparent 70%);
  border-radius: 50%;
}
.mr-ai-card__ic {
  font-size: 36px;
  display: block;
  margin-bottom: 12px;
}
.mr-ai-card__title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--mr-color-primary-dark);
}
.mr-ai-card__desc {
  font-size: 15px;
  color: var(--mr-color-text);
  margin: 0 0 16px;
  line-height: 1.7;
}
.mr-ai-card__save {
  display: inline-block;
  background: rgba(8, 145, 178, 0.1);
  color: var(--mr-color-primary-dark);
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
}

/* ---- Benefit tier badge ---- */
.mr-benefit__tier {
  display: inline-block;
  margin-top: 12px;
  font-size: 12px;
  padding: 3px 10px;
  background: var(--mr-color-primary);
  color: #fff;
  border-radius: 999px;
  font-weight: 600;
}

/* ---- Benefits ---- */
.mr-benefits {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 48px;
}
.mr-benefit {
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--mr-color-border);
}
.mr-benefit__num {
  color: var(--mr-color-accent);
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
}
.mr-benefit__title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--mr-color-text);
}
.mr-benefit__desc {
  color: var(--mr-color-text-muted);
  margin: 0;
  font-size: 15px;
}
.mr-benefit__desc strong {
  color: var(--mr-color-primary-dark);
}

/* ---- Plans ---- */
.mr-plans {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 48px;
}
.mr-plan {
  position: relative;
  background: #fff;
  border-radius: 12px;
  padding: 32px 20px;
  border: 1px solid var(--mr-color-border);
  text-align: center;
}
.mr-plan--featured {
  border: 2px solid var(--mr-color-primary);
  transform: scale(1.04);
  box-shadow: 0 8px 24px rgba(8, 145, 178, 0.15);
}
.mr-plan--free {
  border: 2px solid var(--mr-color-accent);
  background: linear-gradient(180deg, #fef9f0 0%, #fff 60%);
}
.mr-plan__badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--mr-color-primary);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 16px;
  border-radius: 12px;
}
.mr-plan__badge--free {
  background: var(--mr-color-accent);
  color: #0f172a;
}
.mr-plan__target {
  font-size: 12px;
  color: var(--mr-color-text-muted);
  margin-bottom: 16px;
  font-weight: 500;
}
.mr-plan__name {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
}
.mr-plan__price {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 16px;
  color: var(--mr-color-text);
}
.mr-plan__unit {
  font-size: 14px;
  font-weight: 500;
  color: var(--mr-color-text-muted);
  margin-left: 4px;
}
.mr-plan__features {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}
.mr-plan__features li {
  padding: 6px 0;
  font-size: 14px;
  color: var(--mr-color-text-muted);
  border-top: 1px solid var(--mr-color-border);
}
.mr-plan__features li:first-child {
  border-top: none;
}
.mr-plan__features strong {
  color: var(--mr-color-text);
}
.mr-pricing__note {
  margin-top: 32px;
  text-align: center;
  color: var(--mr-color-text-muted);
  font-size: 13px;
  line-height: 1.8;
}

/* ---- FAQ ---- */
.mr-faq {
  max-width: 720px;
  margin: 48px auto 0;
}
.mr-faq__item {
  background: #fff;
  border: 1px solid var(--mr-color-border);
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 0;
}
.mr-faq__q {
  cursor: pointer;
  padding: 20px 24px;
  font-weight: 600;
  font-size: 15px;
  list-style: none;
  position: relative;
  padding-right: 48px;
}
.mr-faq__q::after {
  content: "+";
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: var(--mr-color-primary);
  font-weight: 400;
}
.mr-faq__item[open] .mr-faq__q::after {
  content: "−";
}
.mr-faq__a {
  padding: 0 24px 20px;
  margin: 0;
  color: var(--mr-color-text-muted);
  font-size: 15px;
}

/* ---- Contact ---- */
.mr-contact-section {
  background: linear-gradient(180deg, #f8fafc 0%, #e0f2fe 100%);
}
.mr-contact__lead {
  text-align: center;
  color: var(--mr-color-text-muted);
  margin: 0 0 40px;
}
.mr-contact__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 720px;
  margin: 0 auto;
}
.mr-contact__card {
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  border: 1px solid var(--mr-color-border);
}
.mr-contact__label {
  font-size: 13px;
  color: var(--mr-color-text-muted);
  margin-bottom: 12px;
}
.mr-contact__value {
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  color: var(--mr-color-primary);
  text-decoration: none;
}
.mr-contact__value:hover {
  text-decoration: underline;
}

/* ---- Footer ---- */
.mr-footer {
  background: #0f172a;
  color: #e2e8f0;
  padding: 48px 24px;
}
.mr-footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  flex-wrap: wrap;
}
.mr-footer__tagline {
  font-size: 13px;
  color: #94a3b8;
  margin: 8px 0 0;
}
.mr-footer__right {
  text-align: right;
}
.mr-footer__company {
  font-size: 13px;
  line-height: 1.8;
  color: #cbd5e1;
  margin-bottom: 12px;
}
.mr-footer__copy {
  font-size: 12px;
  color: #64748b;
  margin: 0;
}

/* ---- Mobile ---- */
@media (max-width: 900px) {
  .mr-benefits,
  .mr-plans,
  .mr-ai-grid {
    grid-template-columns: 1fr;
  }
  .mr-free-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .mr-plan--featured {
    transform: none;
  }
  .mr-contact__grid {
    grid-template-columns: 1fr;
  }
  .mr-hero {
    padding: 72px 20px 80px;
  }
  .mr-section {
    padding: 64px 0;
  }
  .mr-footer__inner {
    flex-direction: column;
  }
  .mr-footer__right {
    text-align: left;
  }
}
@media (max-width: 640px) {
  .mr-free-grid {
    grid-template-columns: 1fr;
  }
}
</style>

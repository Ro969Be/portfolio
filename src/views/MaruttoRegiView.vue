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
          ネットが落ちても、<br />
          注文は止まらない。
        </h1>
        <p class="mr-lead">
          満席の金曜、ディナータイムに WiFi が落ちた——<br />
          その日のために作られた、次世代のクラウドレジ。<br />
          店内ハブが、すべての端末をつなぎ続けます。
        </p>
        <div class="mr-cta">
          <a class="mr-btn mr-btn--primary" href="#pricing">料金プランを見る</a>
          <a class="mr-btn mr-btn--ghost" href="#contact">お問い合わせ</a>
        </div>
        <p class="mr-cta__note">
          30 日間無料トライアル中・いつでも解約可能・違約金なし
        </p>
      </div>
    </header>

    <!-- Benefits -->
    <section class="mr-section mr-bg-light">
      <div class="mr-container">
        <h2 class="mr-section__title">まるっとレジ が選ばれる 4 つの理由</h2>

        <div class="mr-benefits">
          <article class="mr-benefit">
            <div class="mr-benefit__num">01</div>
            <h3 class="mr-benefit__title">店全体のオフライン継続(ハブモード)</h3>
            <p class="mr-benefit__desc">
              他社 POS は「端末 1 台のオフライン会計」まで。<br />
              まるっとレジは<strong>店内ハブを介して全端末が繋がり続ける</strong>ので、
              クラウド断絶時もハンディ→KDS→レジの連携が止まりません。
            </p>
          </article>

          <article class="mr-benefit">
            <div class="mr-benefit__num">02</div>
            <h3 class="mr-benefit__title">予約サイト 4 社を、1 画面で</h3>
            <p class="mr-benefit__desc">
              食べログ・ぐるなび・ホットペッパー・Retty の予約を<strong>別料金なしで統合</strong>。
              新着予約、食事制限、席移動まで串刺し管理。
            </p>
          </article>

          <article class="mr-benefit">
            <div class="mr-benefit__num">03</div>
            <h3 class="mr-benefit__title">インボイス・軽減税率、全部入り</h3>
            <p class="mr-benefit__desc">
              レシート・領収書・会計エクスポートすべてで
              <strong>登録番号表示・8%/10% 区分・支払内訳</strong>を標準対応。
              税理士が喜ぶフォーマットで月末が楽になります。
            </p>
          </article>

          <article class="mr-benefit">
            <div class="mr-benefit__num">04</div>
            <h3 class="mr-benefit__title">AI がバックオフィスを引き受けます</h3>
            <p class="mr-benefit__desc">
              📷 レシート OCR(仕入管理)、📊 明日の発注量 AI 提案、
              🧾 月次レポート要約、💬 予約返信テンプレ AI 生成。
              <strong>Standard プランから追加料金なし</strong>。
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="mr-section">
      <div class="mr-container">
        <h2 class="mr-section__title">料金プラン</h2>
        <p class="mr-section__sub">すべてのプランで 30 日間無料トライアル付き</p>

        <div class="mr-plans">
          <article class="mr-plan">
            <div class="mr-plan__name">Free</div>
            <div class="mr-plan__price">¥0<span class="mr-plan__unit">/月</span></div>
            <ul class="mr-plan__features">
              <li>会計月 100 件まで</li>
              <li>POS 1 台</li>
              <li>予約 1 サイト連携</li>
              <li>メールサポート</li>
            </ul>
          </article>

          <article class="mr-plan">
            <div class="mr-plan__name">Starter</div>
            <div class="mr-plan__price">¥3,980<span class="mr-plan__unit">/月</span></div>
            <ul class="mr-plan__features">
              <li>会計無制限</li>
              <li>予約 2 サイト連携</li>
              <li>KDS 1 台</li>
              <li>レシート OCR(AI)</li>
            </ul>
          </article>

          <article class="mr-plan mr-plan--featured">
            <div class="mr-plan__badge">おすすめ</div>
            <div class="mr-plan__name">Standard</div>
            <div class="mr-plan__price">¥7,980<span class="mr-plan__unit">/月</span></div>
            <ul class="mr-plan__features">
              <li>Starter のすべて</li>
              <li><strong>ハブモード(店全体オフライン継続)</strong></li>
              <li>予約 4 サイト統合 in-box</li>
              <li>KDS 無制限</li>
              <li>LINE 連携</li>
              <li>AI 発注補助・月次レポート</li>
            </ul>
          </article>

          <article class="mr-plan">
            <div class="mr-plan__name">Pro</div>
            <div class="mr-plan__price">¥14,800<span class="mr-plan__unit">/月</span></div>
            <ul class="mr-plan__features">
              <li>Standard のすべて</li>
              <li>多店舗管理(〜5 店)</li>
              <li>AI 売上予測</li>
              <li>優先サポート</li>
            </ul>
          </article>
        </div>

        <p class="mr-pricing__note">
          価格は税抜表記です。消費税は Stripe Tax により自動計算・請求されます。<br />
          お支払いはクレジットカード(Visa / Mastercard / JCB / American Express)。
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mr-section mr-bg-light">
      <div class="mr-container">
        <h2 class="mr-section__title">よくあるご質問</h2>

        <div class="mr-faq">
          <details class="mr-faq__item">
            <summary class="mr-faq__q">本当にネットが落ちても動きますか?</summary>
            <p class="mr-faq__a">
              ハブモード(Standard プラン以上)をご契約時は、店内ハブが稼働する限り全端末で会計・予約・KDS が継続します。クラウド同期は復旧時に自動で行われ、衝突は updatedAt ベースで解決します。
            </p>
          </details>
          <details class="mr-faq__item">
            <summary class="mr-faq__q">導入にどれくらい時間がかかりますか?</summary>
            <p class="mr-faq__a">
              Starter プランは最短 30 分で開始できます。iPad と WiFi があればその場で利用可能です。ハブモードは店内 LAN 設定が必要で、初期訪問セットアップ(オプション)もご案内できます。
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
              違約金なし、いつでも解約可能です。次回課金日の前日までに Stripe Customer Portal から解約手続きを行えば、翌月以降の請求は発生しません。
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
    "まるっとレジは、飲食店向けのクラウド POS レジ SaaS。ハブモードでネット切断時も全端末が稼働、予約 4 サイト統合、AI によるバックオフィス自動化、月額 ¥3,980 から、30 日間無料トライアル付き。";
});
onBeforeUnmount(() => {
  if (prevTitle) document.title = prevTitle;
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
  .mr-plans {
    grid-template-columns: 1fr;
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
</style>

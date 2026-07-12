<script setup>
/*
 * "Developments defining our world" 资讯区
 * 分类 Tab 筛选 + 三列卡片网格，computed 按当前 Tab 过滤
 */
import { ref, computed } from 'vue'
import human1 from "@/assets/human/human1.png"
import human2 from "@/assets/human/human2.png"  
import human3 from "@/assets/human/human3.png"  
import human4 from "@/assets/human/human4.png"  
import human5 from "@/assets/human/human5.jpg"  

const isMobile =  ref(window.innerWidth <= 767)
</script>

<template>
    <section class="human_con">
      <p class="title">人物プロフィール</p>
      <div class="liste_box">
        <div class="list_item">
            <div v-if="isMobile">
                <img :src="human1" alt="">
            </div>
            <div class="left">
                <p class="name">渡辺 隆司</p>
                <p class="sub_label">Zenith Capital Lab 創設者／チーフストラテジスト／日本伝統金融市場におけるシニアストラテジスト</p>
                <div class="others">
                    <p class="label">専門分野:</p>
                    <p class="value">エネルギー、資源、暗号資産、ブロックチェーンおよびWeb3関連産業、半導体、人工知能、その他テクノロジー成長分野</p>
                </div>
                <div class="others">
                    <p class="label">経歴:</p>
                    <p class="value">過去に野村證券にてシニアアナリストおよびマクロストラテジストを務め、アジア・マクロ戦略部門の副ディレクターを歴任。東京・香港・シンガポールを拠点に、37年以上の金融市場経験、25年以上の機関投資リサーチ経験、10年以上のデジタル資産市場研究経験を有する。現在はZenith Capital Labの創設者として活動している。</p>
                </div>
            </div>
            <img :src="human1" alt="" v-if="!isMobile">
        </div>
        <div class="list_item">
            <div v-if="isMobile">
                <img :src="human2" alt="">
            </div>
            <div class="left">
                <p class="name">中村 愛子</p>
                <p class="sub_label">市場データの整理／グループ運営／ミーティングの調整・運営 ／ 会員サポート業務 ／ リサーチレポートの編集</p>
                <div class="others">
                    <p class="label">専門分野:</p>
                    <p class="value">中村愛子はデジタル資産研究チームの運営責任者として活動しています</p>
                </div>
            </div>
            <img :src="human2" alt="" v-if="!isMobile">
        </div>
        <div class="list_item">
            <div v-if="isMobile">
                <img :src="human3" alt="">
            </div>
            <div class="left">
                <p class="name">佐藤 健司</p>
                <p class="sub_label">オンチェーンデータ分析部門</p>
                <div class="others">
                    <p class="label">経歴:</p>
                    <p class="value">日本のブロックチェーンデータ分析企業においてリサーチャーとして勤務し、長年にわたりデジタル資産のオンチェーンデータ研究および資金フロー分析に従事。これまでに複数のデジタル資産リサーチ機関および業界分析チームと共同研究を行い、オンチェーン資金フローの追跡、クジラウォレットの監視、機関投資家のポジション動向分析を専門としている</p>
                </div>
                <div class="others">
                    <p class="label">現在の役割:</p>
                    <p class="value">Zenith Capital Labにおいてオンチェーンデータ分析部門の責任者を務め、オンチェーンデータのモニタリング、資金フロー分析、デジタル資産プロジェクトのリサーチを担当し、研究チームに対してデータ面からのサポートを提供している</p>
                </div>
            </div>
            <img :src="human3" alt="" v-if="!isMobile">
        </div>
        <div class="list_item">
            <div v-if="isMobile">
                <img :src="human4" alt="">
            </div>
            <div class="left">
                <p class="name">森 由纪</p>
                <p class="sub_label">マーケットセンチメント研究部門</p>
                <div class="others">
                    <p class="label">経歴:</p>
                    <p class="value">日本の証券市場およびデジタル資産市場における投資家行動の研究に従事し、長年にわたりマーケットセンチメント分析、マクロイベントの影響評価、資金フロー変化の研究を行ってきた。また、複数の機関投資リサーチプロジェクトにも参画し、実務ベースの市場分析経験を有する。</p>
                </div>
                <div class="others">
                    <p class="label">現在の役割:</p>
                    <p class="value">Zenith Capital Labにおいてマーケットセンチメント研究部門の責任者を務め、市場センチメントのモニタリング、機関投資家の行動分析、マクロ市場リサーチを担当し、全体投資戦略の策定に向けたリサーチ基盤を提供している。</p>
                </div>
            </div>
            <img :src="human4" alt="" v-if="!isMobile">
        </div>
        <div class="list_item">
            <div v-if="isMobile">
                <img :src="human5" alt="">
            </div>
            <div class="left">
                <p class="name">田中 博</p>
                <p class="sub_label">リスク管理部門</p>
                <div class="others">
                    <p class="label">経歴:</p>
                    <p class="value">日本の金融機関においてリスク管理部門に従事し、20年以上にわたり資産リスクコントロールおよび資金管理の経験を有する。長年にわたり投資ポートフォリオのリスク評価、ポジション管理、およびリスクコントロールモデルの研究に携わり、複数の機関におけるリスク管理体制の構築にも貢献してきた。</p>
                </div>
                <div class="others">
                    <p class="label">現在の役割:</p>
                    <p class="value">Zenith Capital Labにおいてリスク管理部門の責任者を務め、投資リスク評価、資金管理モデルの運用、およびリスクコントロール体制の構築を担当し、研究戦略が長期的かつ安定的な成長方針に沿うよう管理している。</p>
                </div>
            </div>
            <img :src="human5" alt="" v-if="!isMobile">
        </div>
      </div>
    </section>
</template>
<style lang="scss" scoped>
.human_con {
    width: 1280px;
    margin: 0 auto;
    padding: 20px 0;
    .title {
        font-family: var(--font-serif);
        font-size: clamp(1.875rem, 4.5vw, 3rem);
        font-weight: 700;
        color: #445460;
        line-height: 1.15;
        letter-spacing: -0.01em;
        margin-bottom: var(--space-lg);
        text-align: center;
    }
    .liste_box {
        margin-top: 20px;
        width: 100%;
        .list_item {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            border-radius: 10px;
            background: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 16px;
            margin-bottom: 20px;
            .left {
                .name {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #445460;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin-bottom: var(--space-md);
                }
                .sub_label {
                    font-size: 1.5rem;
                    font-weight: 400;
                    color: #667085;
                    line-height: 1.15;
                    letter-spacing: -0.01em;
                    margin-bottom: var(--space-md);
                }
                .others {
                    display: flex;
                    gap: 10px;
                    margin-bottom: 10px;
                    .label {
                        font-size: 1.5rem;
                        font-weight: 400;
                        color: #667085;
                        line-height: 1.15;
                        letter-spacing: -0.01em;
                        width: fit-content;
                        flex-shrink: 0;
                    }
                    .value {
                        font-size: 1.5rem;
                        font-weight: 400;
                        color: #445460;
                        line-height: 1.15;
                        letter-spacing: -0.01em;
                    }
                }
            }
            img {
                width: 360px;
                height: 480px;
            }
        }
    }
}
@media (max-width: 767px) {
    .human_con {
        width: 96%;
        margin: 0 auto;
        .liste_box {
            .list_item {
                flex-direction: column;
                align-items: center;
                img {
                    width: 170px;
                    height: 240px;
                }
                .left {
                    .name {
                        font-size: 18px;
                        text-align: center;
                    }
                    .sub_label {
                        font-size: 14px;
                    }
                    .others {
                        .label {
                            font-size: 14px;
                        }
                        .value {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
}

</style>

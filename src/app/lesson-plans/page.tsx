import Researcher from "@/components/mascots/Researcher";
import Tag from "@/components/ui/Tag";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";

export const metadata = {
  title: "教案下載 | 化學物質科普知識園區",
};

const LESSON_PLANS = [
  {
    id: "water",
    title: "水的淨化與化學",
    grade: "國小 5 年級",
    duration: "80 分鐘（2 節課）",
    subject: "自然科學",
    tagColor: "blue" as const,
    objectives: [
      "了解自來水淨水流程（混凝、沉澱、過濾、消毒）",
      "認識水中常見化學物質及其功能",
      "能解釋氯消毒的原理與安全性",
    ],
    flowSummary: "引入（汙水照片討論）→ 淨水步驟動畫→ 分組模擬過濾實驗→ 結果討論→ 生活應用延伸",
  },
  {
    id: "ghs",
    title: "危險化學品辨識與 GHS",
    grade: "國小 6 年級",
    duration: "40 分鐘（1 節課）",
    subject: "自然科學",
    tagColor: "coral" as const,
    objectives: [
      "認識 GHS 9 大象形圖的含義",
      "能閱讀日常產品上的危險標示",
      "了解家用化學品的安全存放原則",
    ],
    flowSummary: "GHS 歷史介紹→ 象形圖配對遊戲→ 家用品標示實物觀察→ 情境討論（清潔劑混合）→ 安全承諾卡",
  },
  {
    id: "microplastics",
    title: "微塑膠與環境保護",
    grade: "國小 5-6 年級",
    duration: "80 分鐘（2 節課）",
    subject: "綜合活動",
    tagColor: "green" as const,
    objectives: [
      "了解微塑膠的來源、大小定義與傳播途徑",
      "認識塑膠對生態系統的影響",
      "擬定班級減塑行動計畫",
    ],
    flowSummary: "微塑膠影片欣賞→ 資料分析（台灣海岸調查數據）→ 分組行動計畫設計→ 班級減塑承諾海報",
  },
  {
    id: "steam",
    title: "生活化學 STEAM 實驗",
    grade: "國小 5-6 年級",
    duration: "120 分鐘（3 節課）",
    subject: "STEAM 跨域",
    tagColor: "cyan" as const,
    objectives: [
      "透過動手實驗體驗酸鹼反應（小蘇打＋醋）",
      "紀錄並分析實驗數據，培養科學方法",
      "設計自製天然酸鹼指示劑（紫高麗菜汁）",
    ],
    flowSummary: "安全規則說明→ 小蘇打火山實驗→ 天然指示劑提取→ 測試多種液體酸鹼性→ 海報發表與討論",
  },
];

export default function LessonPlansPage() {
  return (
    <div className={`section ${styles.page}`}>
      <div className="container">
        <div className={styles.pageHeader}>
          <Researcher mood="smile" size={96} wave />
          <div>
            <h1>教案下載</h1>
            <p className={styles.pageSubtitle}>
              配合 108 課綱設計的化學教育教案，適合國小 5-6 年級自然科學及跨域課程使用。
            </p>
          </div>
        </div>

        <div className={styles.planGrid}>
          {LESSON_PLANS.map((plan, i) => (
            <Card key={plan.id} className={styles.planCard} style={{ animationDelay: `${i * 80}ms` }}>
              <div className={styles.planHeader}>
                <Tag color={plan.tagColor} variant="chip">{plan.subject}</Tag>
                <span className={styles.planMeta}>{plan.grade} · {plan.duration}</span>
              </div>

              <h2 className={styles.planTitle}>{plan.title}</h2>

              <div className={styles.planSection}>
                <h3 className={styles.sectionLabel}>學習目標</h3>
                <ol className={styles.objectiveList}>
                  {plan.objectives.map((obj, idx) => (
                    <li key={idx}>{obj}</li>
                  ))}
                </ol>
              </div>

              <div className={styles.planSection}>
                <h3 className={styles.sectionLabel}>教學流程摘要</h3>
                <p className={styles.flowText}>{plan.flowSummary}</p>
              </div>

              <div className={styles.planActions}>
                <Button variant="secondary" size="sm" as="a" href="#">預覽教案</Button>
                <Button variant="primary" size="sm" as="a" href="#">下載 PDF</Button>
              </div>
            </Card>
          ))}
        </div>

        <div className={styles.contactCard}>
          <h2 className={styles.contactTitle}>教案合作與資源申請</h2>
          <p className={styles.contactDesc}>
            如需客製化教案、申請到校演講，或有其他教育資源需求，歡迎與化學物質管理署聯繫。
          </p>
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              <div>
                <p className={styles.contactLabel}>電子郵件</p>
                <p className={styles.contactValue}>chemiknowledge@moenv.gov.tw</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <div>
                <p className={styles.contactLabel}>服務電話</p>
                <p className={styles.contactValue}>02-2311-7722（週一至週五 9:00–17:00）</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>🏛️</span>
              <div>
                <p className={styles.contactLabel}>主辦機關</p>
                <p className={styles.contactValue}>環境部化學物質管理署</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

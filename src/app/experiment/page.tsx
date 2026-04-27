import Flasky from "@/components/mascots/Flasky";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import styles from "./page.module.css";

const EXPERIMENTS = [
  {
    title: "自製火山爆發",
    desc: "用小蘇打粉和醋，在家做一個會冒泡的小火山！",
    difficulty: "簡單",
    time: "15 分鐘",
    materials: ["小蘇打粉", "白醋", "食用色素", "容器"],
    tag: "酸鹼反應",
    tagColor: "yellow" as const,
  },
  {
    title: "彩虹牛奶實驗",
    desc: "一滴洗碗精，讓牛奶產生美麗的彩虹旋渦！",
    difficulty: "簡單",
    time: "10 分鐘",
    materials: ["全脂牛奶", "食用色素", "洗碗精", "淺盤"],
    tag: "表面張力",
    tagColor: "cyan" as const,
  },
  {
    title: "密度彩虹塔",
    desc: "把不同密度的液體疊起來，創造七彩液體塔！",
    difficulty: "中等",
    time: "20 分鐘",
    materials: ["蜂蜜", "玉米糖漿", "洗碗精", "水", "植物油", "酒精"],
    tag: "密度原理",
    tagColor: "blue" as const,
  },
  {
    title: "葡萄乾跳舞",
    desc: "葡萄乾放入汽水後，為什麼會上下浮沉像在跳舞？",
    difficulty: "簡單",
    time: "5 分鐘",
    materials: ["透明汽水", "葡萄乾", "透明杯"],
    tag: "氣泡浮力",
    tagColor: "green" as const,
  },
];

export const metadata = {
  title: "互動實驗 | 化學物質科普知識園區",
};

export default function ExperimentPage() {
  return (
    <div className={`section ${styles.page}`}>
      <div className="container">
        <div className={styles.header}>
          <Flasky mood="proud" size={100} />
          <div>
            <h1>互動化學實驗</h1>
            <p className={styles.subtitle}>在家就能玩的安全小實驗！每個實驗都有詳細步驟說明。</p>
          </div>
        </div>

        <div className={styles.warning}>
          <span aria-hidden>⚠</span>
          <div>
            <strong>安全提醒：</strong>
            所有實驗應在大人陪同下進行。使用化學品時務必戴護目鏡，並在通風處操作。
          </div>
        </div>

        <div className={styles.grid}>
          {EXPERIMENTS.map((exp, i) => (
            <Card key={i} className={styles.expCard}>
              <div className={styles.cardMeta}>
                <Tag color={exp.tagColor} variant="chip">{exp.tag}</Tag>
                <div className={styles.cardInfo}>
                  <span>⏱ {exp.time}</span>
                  <span>難度：{exp.difficulty}</span>
                </div>
              </div>
              <h3 className={styles.expTitle}>{exp.title}</h3>
              <p className={styles.expDesc}>{exp.desc}</p>
              <div className={styles.materials}>
                <strong>材料：</strong>
                {exp.materials.join("、")}
              </div>
              <Button variant="secondary" size="md">開始實驗 →</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

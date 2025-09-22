export interface AchievementItem {
  year: string;
  category: 'Research' | 'Patent' | 'Exhibition' | 'Press';
  title: string;
  description: string;
  links?: { label: string; href: string }[];
}

export const achievements: AchievementItem[] = [
  {
    year: '2024',
    category: 'Research',
    title: 'Hybrid Computing™ の運用基盤アップデート',
    description:
      '分散AIとIoT機器を統合管理するための運用テンプレートを刷新。エッジからクラウドまでを一貫したチーム構造で支援しています。'
  },
  {
    year: '2021',
    category: 'Patent',
    title: '光電子タグとロケーションAIの実証実験',
    description:
      '高知県の養豚場にて、光電子タグとAI解析による位置可視化のPoCを実施。スマート畜産や物流分野での社会実装を推進。',
    links: [
      { label: 'LED Tag Leaflet', href: '/legacy/fy21/LED-Tag-Leaflet.pdf' },
      { label: 'Location Demo', href: '/legacy/2021location/location_demo.zip' }
    ]
  },
  {
    year: '2020',
    category: 'Exhibition',
    title: 'Hybrid Computing™ デモ環境刷新',
    description:
      '360度動画やエッジ推論デモを組み合わせ、HCの体験型プレゼンテーションセットを構築。スマートシティや遠隔監視のPoCに活用しました。',
    links: [
      { label: '360 Video', href: '/legacy/fy20/360video-2.mov' },
      { label: 'Sales Deck', href: '/legacy/fy20/tonoi_sales.pdf' }
    ]
  },
  {
    year: '2019',
    category: 'Research',
    title: '情報処理学会 (IPSJ-ARC) 研究成果',
    description:
      'Hybrid Computing™のアーキテクチャと応用事例を複数の論文として発表。分散処理の新しい形を学術コミュニティと共有しました。',
    links: [
      { label: 'ARC19235 発表資料', href: '/legacy/FY19Q1/2019ARC227/IPSJ-ARC19235.htm' },
      { label: 'Leaflet', href: '/legacy/FY19Q1/TCA_tonoi-Leaflet_20191028.pdf' }
    ]
  },
  {
    year: '2018',
    category: 'Exhibition',
    title: 'SC18 & BPCC18 でのHybrid Computing™紹介',
    description:
      'スーパーコンピューティング分野の国際会議にて、tonoiのHybrid Computing™技術とビジョンを発信しました。',
    links: [
      { label: 'SC18 Archive', href: '/legacy/sc18/at_a_glance.html' },
      { label: 'BPCCスライド', href: '/legacy/BPCC18/tonoi-bpcc-public.pdf' }
    ]
  }
];

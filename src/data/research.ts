export interface ResearchHighlight {
  title: string;
  summary: string;
  links: { label: string; href: string }[];
  tags: string[];
}

export const researchHighlights: ResearchHighlight[] = [
  {
    title: 'Hybrid Computing™ リファレンスアーキテクチャ',
    summary:
      'クラウドとストレージを跨るデータ指向の分散アーキテクチャ。データ転送を最小化しながら、演算コードを最適な場所に配信する設計思想をまとめています。',
    links: [
      { label: 'HC Leaflet (日本語)', href: '/legacy/FY19Q1/hc_leaflet_fy19q1.pdf' },
      { label: 'HC Leaflet (English)', href: '/legacy/FY19Q1/tonoi-HC_leaflet_r7.5-eng.pdf' }
    ],
    tags: ['Hybrid Computing™', 'Architecture', 'Whitepaper']
  },
  {
    title: 'IPSJ-ARC 学術発表 (2019)',
    summary:
      '情報処理学会アーキテクチャ研究会にてHybrid Computing™に関する研究成果を発表。プラットフォーム設計や応用事例を多数公開しています。',
    links: [
      { label: 'ARC19235 発表資料', href: '/legacy/FY19Q1/2019ARC227/IPSJ-ARC19235.htm' },
      { label: '論文 PDF 一覧', href: '/legacy/FY19Q1/2019ARC227/IPSJ-ARC19235001.pdf' }
    ],
    tags: ['Academic', 'IPSJ', 'Distributed Systems']
  },
  {
    title: 'BPCC18: Beyond Peta-scale Computing Conference',
    summary:
      '世界規模での大規模計算に向けたHybrid Computing™の可能性を紹介。高性能計算とデータ管理の両立に焦点をあてました。',
    links: [{ label: '発表スライド', href: '/legacy/BPCC18/tonoi-bpcc-public.pdf' }],
    tags: ['Conference', 'HPC', 'Presentation']
  },
  {
    title: 'Smart City / Location Platform R&D',
    summary:
      'LED タグやエッジAIカメラによる位置情報サービスを研究開発。地方創生SDGsプラットフォームへの参画など、社会実装を見据えた取り組みを進めています。',
    links: [
      { label: 'LED Tag Leaflet', href: '/legacy/fy21/LED-Tag-Leaflet.pdf' },
      { label: 'Location Demo', href: '/legacy/2021location/location_demo.zip' }
    ],
    tags: ['Smart City', 'Edge AI', 'PoC']
  }
];

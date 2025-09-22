export interface ServiceItem {
  name: string;
  description: string;
  href: string;
  category: 'product' | 'research' | 'solution';
  highlight?: string;
  icon: string;
}

export const services: ServiceItem[] = [
  {
    name: '光電子タグプラットフォーム',
    description:
      '独自の光電子タグとAI解析により、ロケーションの追跡と目視による在庫把握を両立。畜産や屋内物流の現場で PoC を進行中です。',
    href: '/fy21/LED-Tag-Leaflet.pdf',
    category: 'product',
    highlight: 'PoC 実証中',
    icon: '🔦'
  },
  {
    name: 'HC-Door 監視AI',
    description:
      '扉の開閉検知や物品移動を分散AIで解析し、録画データの頭出しとストリーミング再生を提供するクラウドサービス。Azure Marketplace で提供中。',
    href: 'https://azuremarketplace.microsoft.com/ja-jp/marketplace/apps/tonoicoltd1593682873365.hc-door-v003',
    category: 'solution',
    highlight: 'Azure Marketplace',
    icon: '📹'
  },
  {
    name: 'HC 分散処理ミドルウェア',
    description:
      '大容量データをクラウドへ送るのではなく、演算コードをデータの近くへ配信するHybrid Computing™ミドルウェア。AIロジックの集中開発と分散実行を両立します。',
    href: '/legacy/services/service1/',
    category: 'solution',
    icon: '🧠'
  },
  {
    name: '高性能ストレージ設計',
    description:
      'NYRIAD の思想をもとに、大容量・高速化・低消費電力を兼ね備えた新型RAIDストレージソフトウェアを設計。データ重視の現場でHybrid Computing™を活かします。',
    href: '/legacy/services/service2/',
    category: 'research',
    icon: '💾'
  },
  {
    name: '固定電話連携ドアホン',
    description:
      '宅配事業者の再配達負荷を軽減するため、ドアホンと宅配ボックスを組み合わせたリモート受け渡しシステムを開発。固定電話と連携し本人確認を実現します。',
    href: '/legacy/services/service3/',
    category: 'product',
    icon: '📞'
  }
];

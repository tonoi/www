export interface MissionItem {
  id: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  image: string;
}

export const missionItems: MissionItem[] = [
  {
    id: 'edge',
    label: 'Edge Computing',
    title: '分散する現場で価値を生むアーキテクチャ',
    description:
      'プライバシー保護、帯域節約、レスポンス向上を実現するため、端末側での分散処理が必須になっています。クラウド中心の運用と両立させながら、現場が抱える管理コストを下げる仕組みを構築しています。',
    points: [
      '分散環境でも一貫したセキュリティポリシーを適用',
      'リアルタイム性を重視したエッジ推論や制御を提供',
      '現場デバイスのライフサイクル管理を自動化'
    ],
    image: '/images/edge-venn.png'
  },
  {
    id: 'hybrid',
    label: 'Hybrid Computing',
    title: 'クラウドとエッジを統合するtonoi独自の基盤技術',
    description:
      'クラウドの俊敏性とエッジの即応性を組み合わせ、AIやデータ処理を最適な場所に自動配置する分散プラットフォームを開発しています。Hybrid Computing が、これまで両立できなかったDevOpsとエッジ分散をつなぎます。',
    points: [
      'AIワークロードをハードウェア特性に応じて自動分散',
      'データ転送コストを抑えながら推論精度を担保',
      'クラウドネイティブな運用体験をエッジに拡張'
    ],
    image: '/images/VennDiagram.png'
  },
  {
    id: 'devops',
    label: 'DevOps for Hardware',
    title: 'エッジを含む開発・運用の高速なサイクルを実現',
    description:
      'クラウドで培った開発・運用の高速サイクルを、エッジやハードウェア領域に適用します。ミッションクリティカルな現場でも継続的な改善を可能にするためのパイプラインを構築します。',
    points: [
      'エッジデバイスへの継続的デリバリーを自動化',
      'MLOpsと連動した監視・フィードバックループ',
      '法規制やガバナンスを考慮したリリースフロー'
    ],
    image: '/images/devops.png'
  }
];

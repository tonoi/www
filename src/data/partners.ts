export interface Partner {
  name: string;
  description: string;
  logo: string;
  url: string;
}

export const partners: Partner[] = [
  {
    name: 'アドバンストシステムズ株式会社',
    description: 'FPGA/ASIC 設計の専門パートナーとしてハードウェア実装を共同推進。',
    logo: '/images/advalogo.jpg',
    url: 'http://www.asco.jp'
  },
  {
    name: '株式会社Shinonome',
    description: 'クラウドネイティブ技術とScalaエコシステムのパートナーシップ。',
    logo: '/images/shinologo.png',
    url: 'https://shinonome.io/'
  },
  {
    name: '理化学研究所 橋田浩一 (元東大教授)',
    description: '自然言語・社会情報技術の知見を活かし、Hybrid Computing™を社会システムへ展開。',
    logo: '/images/riken_logo.svg',
    url: 'https://www.riken.jp/'
  },
  {
    name: 'Pacific Applied Technologies',
    description: '米国における先端テクノロジー企業との協業。',
    logo: '/images/patlogo.png',
    url: 'https://www.pacificat.net/'
  },
  {
    name: '地方創生SDGsプラットフォーム',
    description: '地域課題を解決するスマートシティ連携でHybrid Computing™を実装。',
    logo: '/images/platform_logo_wheel.png',
    url: 'https://future-city.go.jp/'
  },
  {
    name: 'GovTech東京',
    description: '行政デジタル化と市民サービスの高度化に向けた共創パートナー。',
    logo: '/images/govtech_tokyo_logo.svg',
    url: 'https://www.govtechtokyo.metro.tokyo.lg.jp/'
  },
  {
    name: 'デジタル庁',
    description: '社会全体のデジタルトランスフォーメーションを推進する政策連携。',
    logo: '/images/digital_agency_logo.svg',
    url: 'https://www.digital.go.jp/'
  }
];

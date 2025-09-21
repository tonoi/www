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
    name: '東京大学 橋田研究室',
    description: '自然言語・社会情報技術と連携した共同研究。',
    logo: '/images/utlogo.png',
    url: 'http://www.sict.i.u-tokyo.ac.jp/members/hasida/'
  },
  {
    name: 'Pacific Applied Technologies',
    description: '米国における先端テクノロジー企業との協業。',
    logo: '/images/patlogo.png',
    url: 'https://www.pacificat.net/'
  },
  {
    name: '地方創生SDGsプラットフォーム',
    description: '地域課題を解決するスマートシティ連携でHybrid Computingを実装。',
    logo: '/images/platform_logo_wheel.png',
    url: 'https://future-city.go.jp/'
  },
  {
    name: 'Andes Technology Corporation',
    description: 'RISC-V コアと低消費電力プロセッサ技術の評価パートナー。',
    logo: '/images/andes_logo.png',
    url: 'http://www.andestech.com/en/partners/ip/'
  }
];

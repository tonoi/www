export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  focus: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: '戀川 光央',
    role: '代表取締役 / Chief Architect',
    bio: 'HP-LX日本語化プロジェクトやSGI Netscape Serverの立ち上げ、Microsoftでのインターネット/ Xbox事業などを経てtonoiを創業。',
    image: '/images/koikawa.jpg',
    focus: ['Hybrid Computing™', 'Architecture', 'Business Strategy']
  },
  {
    name: '小倉 豪放',
    role: 'クライアント開発リード',
    bio: 'SEGA、Xboxなどでのゲーム開発を経てDeNAに所属。CEDEC運営委員の経験を活かし、UX視点の分散アプリを設計。',
    image: '/images/ogura.jpg',
    focus: ['Client Engineering', 'UX', 'Graphics']
  },
  {
    name: '青木 良行',
    role: 'ハードウェア開発',
    bio: 'NECでのASIC/FPGA設計経験を基盤に、エッジデバイス向けのハードウェアとAIアクセラレータを担当。',
    image: '/images/aoki.png',
    focus: ['FPGA', 'Edge Device', 'Hardware Design']
  },
  {
    name: '林 伸彦',
    role: '戦略会計アドバイザー',
    bio: '公認会計士・税理士。林戦略会計税務事務所 代表、日本MITベンチャーフォーラム副理事長。',
    image: '/images/hayashi.jpg',
    focus: ['Finance', 'Strategy', 'Governance']
  }
];

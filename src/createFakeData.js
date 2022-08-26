import Post from './models/post.js';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body: '당국개입에 1330원대 하락 이후 오후 다시 상승 흐름 1346원선까지 오르면서 13년4개월래 최고치 또 경신 달러인덱스 109선 상승폭 확대, 美 달러화 강세 기조[이데일리 이윤화 기자] 원·달러 환율이 외환당국의 직접 개입에도 불구하고 6원 가까이 오르며 1340원대로 올라섰다. 연고점은 물론, 금융위기 이후 13년 4개월만에 최고치를 이틀 연속 경신한 것으로 1350원대도 머지 않았단 전망이 나온다. 유로존의 스태그플레이션(물가상승 속 경기침체) 우려가 부각되면서 달러화의 강세폭이 확대되자 당국 개입에도 매수 수요가 몰리면서 오후들어 다시 상승폭을 키웠다. 여기에 중국 위안화 약세, 국내증시 외국인 투자자 순매도까지 합세하며 원화 가치가 하락했다.',
    tags: ['가짜', '데이터'],
  }));

  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
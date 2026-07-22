import { NextResponse } from "next/server";

export async function GET() {
  try {
    const query = `
"현장실습"
OR
"특성화고"
OR
"직업계고"
OR
"고졸 취업"
OR
"산학협력"
OR
"기업 체험"
OR
"진로 체험"
OR
"학생 인턴"
OR
"청소년 공모전"
OR
"학생 경진대회"
OR
"학생 자격증"
`;
const positiveKeywords = [
  "현장실습",
  "특성화고",
  "직업계고",
  "고졸",
  "학생 인턴",
  "산학협력",
  "진로 체험",
  "직업 체험",
  "공모전",
  "경진대회",
  "해커톤",
  "자격증",
  "기능사",
  "교육 프로그램",
  "기업 체험"
];
const negativeKeywords = [
  "연예",
  "드라마",
  "영화",
  "정치",
  "선거",
  "범죄",
  "사건",
  "논란",
  "부동산"
];
function calculateScore(article:any){

  let score = 0;

  const text =
`${article.title ?? ""} ${article.description ?? ""}`.toLowerCase();

  positiveKeywords.forEach(keyword=>{
    if(text.includes(keyword)){
      score += 5;
    }
  });


  negativeKeywords.forEach(keyword=>{
    if(text.includes(keyword)){
      score -= 10;
    }
  });


  return score;
}


    const url =
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=ko&sortBy=publishedAt&pageSize=20`;
    const response = await fetch(url, {
      headers: {
        "X-Api-Key": process.env.NEWS_API_KEY!,
      },
    });
    const data = await response.json();
    console.log(data);
    
    const uniqueArticles = data.articles.filter(
  (article:any, index:number, self:any[]) =>
    index === self.findIndex(
      (a:any)=>a.title === article.title
    )
);
    const filteredArticles = uniqueArticles
  .map((article:any)=>({
    ...article,
    score: calculateScore(article)
  }))
  .filter((article:any)=>article.score > 0)
  .sort(
    (a:any,b:any)=>b.score-a.score
  )
  .slice(0,4);


return NextResponse.json({
  status:"ok",
  articles: filteredArticles
});
  } catch (error) {
    return NextResponse.json(
      {
        error: "뉴스를 불러오지 못했습니다."
      },
      {
        status: 500
      }
    );
  }
}
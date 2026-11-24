// VOCAMAP Basic — Part 01 (001~100)
// 각 파트가 로드될 때 전역 allWordData 배열에 추가
(function() {
  if (!window.allWordData) window.allWordData = [];
  window.allWordData.push(
    { num:1,  eng:"abroad",          kor:"외국으로, 해외로",    sentence:"She worked abroad for a year.",                  sentenceKor:"그녀는 1년간 해외에서 일했다." },
    { num:2,  eng:"aerobics",        kor:"에어로빅",            sentence:"She does aerobics every day to improve her figure.", sentenceKor:"그녀는 체형을 가꾸기 위해 매일 에어로빅을 한다." },
    { num:3,  eng:"ambulance",       kor:"구급차",             sentence:"In an emergency, call 119 for an ambulance.",    sentenceKor:"응급상황에는 구급차를 위해 119에 전화하세요." },
    { num:4,  eng:"be full of",      kor:"~로 가득차다",        sentence:"Her bag was full of souvenirs.",                 sentenceKor:"그녀의 가방은 기념품으로 가득 찼다." },
    { num:5,  eng:"be from",         kor:"~출신이다",           sentence:"He is from California.",                        sentenceKor:"그는 캘리포니아 출신이다." },
    { num:6,  eng:"bottom",          kor:"바닥, 밑바닥",        sentence:"I found some coins at the bottom of my bag.",   sentenceKor:"나는 가방 맨 아래에서 동전 몇 개를 찾았다." },
    { num:7,  eng:"be different from",kor:"~와는 다르다",       sentence:"He is totally different from his brother.",     sentenceKor:"그는 그의 형제와 완전히 다르다." },
    { num:8,  eng:"buzz",            kor:"(윙윙)울리는 소리",   sentence:"Bees buzzed lazily among the flowers.",         sentenceKor:"벌들이 꽃들 사이에서 느릿느릿 윙윙거렸다." },
    { num:9,  eng:"cash",            kor:"현금, 현찰",          sentence:"How much cash do you have on you?",             sentenceKor:"지금 현금이 얼마나 있나요?" },
    { num:10, eng:"arrow",           kor:"화살",               sentence:"The arrow flew into the car.",                  sentenceKor:"화살이 차 안으로 날아들었다." }
    // 11~100번은 사진 보내주시면 추가
  );
})();

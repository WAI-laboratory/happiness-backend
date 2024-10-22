
# 행복 명언 API

이 프로젝트는 한국어 행복 명언을 제공하는 API입니다. 카카오헬스케어의 정재훈님의 글에 감명을 받아 프로젝트가 시작되었습니다.
API를 통해 무작위로 행복 명언과 그에 대한 영어 번역을 얻을 수 있습니다.

## 기부
[!["Buy Me A Coffee"](https://cdn.buymeacoffee.com/buttons/default-yellow.png)](https://www.buymeacoffee.com/sobabear)



## 기능

- 한국어로 된 무작위 행복 명언 제공
- 명언의 영어 번역과 저자 정보 제공
- 하루 마다 api content가 바뀝니다.


## 사용 방법

API는 간단하게 무작위 행복 명언을 가져오는 방법을 제공합니다. 다음 엔드포인트를 이용해 시도할 수 있습니다

### 무작위 명언 엔드포인트

```bash
GET https://api.sobabear.com/happiness/random-quote
```


### 예시 응답 
엔드포인트를 호출하면, 아래와 같은 JSON 응답을 받게 됩니다:
```
{
  "message": "Quote fetched successfully",
  "statusCode": 200,
  "data": {
    "id": 60,
    "content": "행복은 내면에서 오지 않고 사이에서 온다. Happiness comes not from within, but from getting the right relationship between yourself and something larger than yourself.",
    "author": "Jonathan Haidt, 사회심리학자",
    "description": null,
    "link": null
  }
}
```

## 사용 사이트
[하루 행복: 크롬 웹 익스텐션](https://chromewebstore.google.com/detail/%ED%95%98%EB%A3%A8-%ED%96%89%EB%B3%B5/mlmeakkbggjjgaefcjpajfdmfhlmldin)

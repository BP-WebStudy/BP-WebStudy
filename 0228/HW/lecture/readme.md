# HTML/CSS 강의 정리 
---
### 2020/03/01
* `font-style` : 글꼴의 스타일 ex) normal, italic
```css
#normal {
    font-style:normal;
}
#italic {
    font-style:italic;
}
```
```html
<div id="normal">normal<div>
<div id="italic">italic<div>
```   
> 결과 -> normal     *italic*

* `font-weight`: 글꼴의 두께 ex) lighter, normal, bold, bolder
* `font-size`: 글꼴의 크기 ex) px, em, small, big 
* `font-family`: 글꼴의 종류 ex) 나눔고딕, 돋움
* `line-height`: 줄 간격 조절, vertical에서 가운데 정렬을 하기 위해 사용 (horizontal에선 text-align:center;)
``` css
#vertical {
    line-height:300px;
    text-align:center;
}
```
```html
<div id="vertical">vertical</div>
```
* `text-decoration`: a태그를 사용할 경우 참조된 링크가 파란색으로 변하기 때문에 이를 방지하기 위해 주로 사용된다. ex) text-decoration:none;

* `position`: 화면 상에 나타나는 대상의 위치를 정하는 속성 ex) absolute, fixed, relative

* `z-inex`: 화면 상에 나타나는 대상의 깊이를 정하는 속성 ex) z-index:20, z-index:10 이 경우 z-index가 20인 대상이 10인 대상보다 위에 나타난다.

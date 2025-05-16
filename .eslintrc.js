module.exports = {
  extends: [
    /*'next',
    'next/core-web-vitals'*/
  ],
  rules: {
    '@next/next/no-img-element': 'off',  // 'img' 태그 사용에 대한 규칙을 끄기
    'jsx-a11y/alt-text': 'off' //Alt 속성 경고 끄기
  },
};

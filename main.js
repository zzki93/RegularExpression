const str = `
010-1234-5678
rlaqudrms12@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The Lorem ipsum dolor sit amet, consectetur adipiscing elit.
abbcccdddd
the difference
`

// const regexp = new RegExp('the','gi')
// const regexp =/the/gi
// console.log(str.match(regexp))

// const regexp2 = /dolor/gi
// // const regexp2 = /zzki/gi
// console.log(regexp2.test(str))

// console.log(str.replace(regexp2,'aaa'))
// console.log(str)

// console.log(str.match(/d$/gm))

// console.log(str.match(/^the/gim))


// console.log(str.match(/\bf\w{1,}\b/g))

// const h =`  the hello world   !
// `

// console.log(h.replace(/\s/g,''))

console.log(
  str.match(/.{1,}(?=@)/g)
)

console.log(
  str.match(/(?<=@).{1,}/g)
)
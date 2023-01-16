import Parser from 'rss-parser'
import { writeFileSync } from 'fs'

type Book = {
  title?: string
  author?: string
  rating: string
  read?: string
}

const parser = new Parser()
let template = `---
layout: bookshelf
permalink: bookshelf.html
keywords: callum, silcock, books, bookshelf, read, books
---

I've read a bunch of books over the years, here they are in order of my personal rating

|Title|Author|Rating (#/5)|
| --- | ---- | ---- |
`

;(async (): Promise<void> => {
  const feed = await parser.parseURL(
    'https://www.goodreads.com/review/list_rss/107372765?key=cd0ITuZ46S6pwSp8VUswfpdTXvhlv_aHhzVB4StMZDtVHMZw&shelf=read',
  )
  const books: Book[] = []
  feed.items.forEach(({ content, title }) => {
    books.push({
      title,
      author: content?.match(/(?<=author: ).*(?=<br)/)?.[0],
      rating: content?.match(/(?<= {2}rating: ).*(?=<br)/)?.[0] ?? '3',
      read: content?.match(/(?<=read at: ).*(?=<br)/)?.[0],
    })
  })

  books.sort((a, b) => b.rating.localeCompare(a.rating))

  books.forEach(book => {
    template = `${template}|${book.title}|${book.author}|${book.rating}|
`
  })
  writeFileSync('./src/bookshelf.md', template)
})()

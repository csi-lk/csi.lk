export = function Header(): string {
  return `
<!doctype html>
<html lang="en" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="{{ renderData.description or description or metadata.description }}">
  <title>{{ renderData.title or title or metadata.title }}</title>
  <link rel="stylesheet" href="/styles/index.css">
</head>
`
}

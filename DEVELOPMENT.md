## Development

```
bundle exec jekyll serve --livereload --verbose --incremental
```

#### Production build

```
JEKYLL_ENV=production bundle exec jekyll build
```

It is recommended to run in production mode since tailwind processing can be slightly different than development.

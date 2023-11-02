---
title: Ts类型体操-Awaited
categories:
  - TypeScript
  - TypeChallenge-Easy
date: 2023-08-10
isShowComments: false
cover: "https://fastly.jsdelivr.net/gh/Ocean-H1/blog_image_bed/20230810164044.png"
---

## Challenge :lock:

If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

For example: if we have `Promise<ExampleType>` how to get ExampleType?

```typescript
type ExampleType = Promise<string[]>;

type Result = MyAwaited<ExampleType>; // string[]
```

## Answer :key:

```typescript
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : never;
```

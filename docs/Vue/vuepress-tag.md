---
tags: ["vuejs", "vuepress", "tags"]
---
# Vuepress 태그 활용하기
공통으로 사용할 수 있는 컴포넌트를 제작한다.
#### .vuepress/theme/components/TagLinks.vue
```vue
<template lang="html">
    <div class="tags">
        <router-link
            v-for="tag in $page.frontmatter.tags"
            :key="tag"
            :to="{ path: '/tags.html#${tag}'}"
        >
            {{ tag }}
        </router-link>
    </div>
</template>
```

마크다운 파일에 컴포넌트를 추가한다.

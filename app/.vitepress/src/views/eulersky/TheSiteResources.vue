<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vitepress';
import { useI18n } from '@/i18n';

import siteList from '@/data/euler-sky/site';
import BreadCrumbs from '@/components/BreadCrumbs.vue';
import AppContent from '@/components/AppContent.vue';

const i18n = useI18n();
const siteI18n = computed(() => {
  return i18n.value.sky.SITE_RESOURCES;
});
const router = useRouter();

function goDetail(url: string) {
  router.go(url);
}
</script>
<template>
  <div class="infra">
    <AppContent :pc-top="40" :mobile-top="24">
      <BreadCrumbs
        :bread1="siteI18n.BREAD1"
        :bread2="siteI18n.BREAD2"
        :link1="siteI18n.BREAD1_URL"
      />
      <OContainer class="site-container" :level-index="1">
        <div class="container-left word-style">
          <h3>{{ siteI18n.CARD_TITLE }}</h3>
          <p class="site-container-introduction">
            {{ siteI18n.CARD_INTRODUCTION }}
          </p>
        </div>
        <OButton
          animation
          type="primary"
          @click="goDetail(siteI18n.APPLY_SITE_URL)"
        >
          {{ siteI18n.BTN_TEXT }}
        </OButton>
      </OContainer>
      <div class="site-list">
        <h2>{{ siteI18n.SITE_TITLE }}</h2>
        <div class="site-card-list">
          <OContainer v-for="item in siteList" :key="item.scale">
            <span class="label"> {{ siteI18n.COMPANY }}</span
            >{{ item.company }} <br />
            <span class="label">{{ siteI18n.SCALE }}</span
            >{{ item.scale }} <br />
            <span class="label">{{ siteI18n.CITY }}</span>{{ item.base }}
            <br />
            <span class="label">{{ siteI18n.TYPE }}</span
            >{{ item.type }} <br />
          </OContainer>
        </div>
        <p class="tip">{{ siteI18n.TIP }}</p>
      </div>
      <OContainer class="apply-container word-style" :level-index="1">
        <h3>{{ siteI18n.APPLY_SITE_TITLE }}</h3>
        <p class="apply-container-introduction">
          {{ siteI18n.APPLY_SITE_INTRODUCTION }}
          <a :href="`mailto:${siteI18n.APPLY_SITE_INTRODUCTION1}`">{{
            siteI18n.APPLY_SITE_INTRODUCTION1
          }}</a>
        </p>
      </OContainer>
    </AppContent>
  </div>
</template>

<style scoped lang="scss">
.word-style {
  color: var(--o-color-text1);
  font-size: var(--o-font-size-h8);
  line-height: var(--o-line-height-h8);
}
.site-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding: 40px;
  .site-container-introduction {
    margin-top: 16px;
    font-size: var(--o-font-size-text);
    line-height: var(--o-line-height-text);
  }

  h3 {
    line-height: var(--o-line-height-h5);
    font-size: var(--o-font-size-h5);
  }
  .o-button {
    color: var(--o-color-white);
    margin-left: 50px;
    max-height: 40px;
    white-space: nowrap;
    @media screen and (max-width: 768px) {
      margin-left: 12px;
    }
  }
}
.apply-container {
  margin-top: 40px;
  padding: 40px;
  h3 {
    line-height: var(--o-line-height-h5);
    font-size: var(--o-font-size-h5);
  }
  .apply-container-introduction {
    margin-top: 16px;
    font-size: var(--o-font-size-text);
    line-height: var(--o-line-height-text);
  }
  @media screen and (max-width: 768px) {
    margin-top: 24px;
    padding: 24px;
    h3 {
      font-size: var(--o-font-size-h7);
      line-height: var(--o-line-height-h7);
    }
    .apply-container-introduction {
      margin-top: 8px;
    }
  }
}
.site-list {
  h2 {
    margin-top: var(--o-spacing-h2);
    font-size: var(--o-font-size-h3);
    font-weight: 300;
    color: var(--o-color-text1);
    line-height: var(--o-line-height-h3);
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: var(--o-font-size-h8);
      line-height: var(--o-line-height-h8);
      margin-top: var(--o-spacing-h4);
    }
  }
  .site-card-list {
    display: grid;
    margin-top: 40px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
    @media screen and (max-width: 1080px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 768px) {
      margin-top: 24px;
      grid-template-columns: 1fr;
    }
    .o-container {
      padding: 40px;
      color: var(--o-color-text1);
      font-size: var(--o-font-size-text);
      line-height: var(--o-line-height-text);
      .label {
        display: inline-block;
        min-width: 70px;
        text-align: right;
        color: var(--o-color-text4);
      }
      img {
        max-height: 128px;
      }
      .company {
        margin-top: 24px;
      }
    }
  }
}
</style>

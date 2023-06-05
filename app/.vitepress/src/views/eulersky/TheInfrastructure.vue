<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from '@/i18n';

import BreadCrumbs from '@/components/BreadCrumbs.vue';
import AppContent from '@/components/AppContent.vue';

const i18n = useI18n();
const infraI18n = computed(() => {
  return i18n.value.sky.INFRA;
});
</script>
<template>
  <div class="infra">
    <AppContent :pc-top="40" :mobile-top="24">
      <BreadCrumbs
        :bread1="infraI18n.BREAD1"
        :bread2="infraI18n.BREAD2"
        :link1="infraI18n.BREAD1_URL"
      />
      <OContainer class="infra-container" :level-index="1">
        <div class="container-left word-style">
          <h3>{{ infraI18n.CARD_TITLE }}</h3>
          <p class="infra-container-introduction">
            {{ infraI18n.CARD_INTRODUCTION }} <br />
            {{ infraI18n.CARD_INTRODUCTION1 }}
            <a :href="`mailto:${infraI18n.CARD_INTRODUCTION2}`">{{
              infraI18n.CARD_INTRODUCTION2
            }}</a>
          </p>
        </div>
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
.infra {
  .infra-container {
    display: flex;
    align-items: center;
    margin-top: 40px;
    padding: 40px;

    h3 {
      line-height: var(--o-line-height-h5);
      font-size: var(--o-font-size-h5);
    }
    .infra-container-introduction {
      color: var(--o-color-text4);
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
      .infra-container-introduction {
        margin-top: 8px;
      }
    }
  }
}
</style>

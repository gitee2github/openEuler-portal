<script lang="ts" setup>
import { computed, ref, reactive, onMounted } from 'vue';
import useWindowResize from '@/components/hooks/useWindowResize';
import { showGuard, getUserAuth, useStoreData } from '@/shared/login';

import AppContent from '@/components/AppContent.vue';

const { token } = getUserAuth();

const screenWidth = ref(useWindowResize());
const isMobile = computed(() => (screenWidth.value <= 1100 ? true : false));

const feedbackUrl = `https://wenjuan.feishu.cn/m/cfm?t=s0rcoBn7lZKi-4km2`;

const height = ref(1710);
</script>

<template>
  <AppContent :pc-top="40" :mobile-top="12">
    <div class="feedback-wrap">
      <template v-if="token">
        <iframe
          ref="feedbackPage"
          :height="height"
          allow="camera *;microphone *;"
          border="0"
          scolling="no"
          :src="feedbackUrl"
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          class="feedback-iframe"
        ></iframe>
      </template>
      <template v-else>
        <div class="auth-box">
          <h2>openEuler Meetup成果反馈</h2>
          <OButton type="primary" @click="showGuard()">
            请先登录后，在填写
          </OButton>
        </div>
      </template>
    </div>
  </AppContent>
</template>

<style lang="scss" scoped>
.feedback-wrap {
  background: var(--o-color-bg2);
  box-shadow: var(--o-shadow-l1);
  padding: 40px;
  @media (max-width: 1100px) {
    padding: 16px;
  }

  .feedback-iframe {
    border: 0;
    width: 100%;
  }
  h2 {
    font-size: 32px;
    font-weight: 500;
    margin: 0 0 40px;
    text-align: center;
    color: var(--o-color-text1);
    @media (max-width: 1100px) {
      font-size: 24px;
      margin: 24px 0;
    }
  }
  .auth-box {
    padding: 64px 0;
    display: grid;
    place-items: center;
  }
}
</style>

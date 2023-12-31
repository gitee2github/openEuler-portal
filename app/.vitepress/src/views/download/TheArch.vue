<script lang="ts" setup>
import { reactive, ref, watch, computed } from 'vue';

import _ from 'lodash';

import { useI18n } from '@/i18n';

import type { DownloadData, ArchList } from '@/shared/@types/type-download';

import TagFilter from '@/components/TagFilter.vue';
import AppPaginationMo from '@/components/AppPaginationMo.vue';
import AppContent from '@/components/AppContent.vue';

const i18n = useI18n();

const downloadData: DownloadData[] = _.cloneDeep(
  i18n.value.download.DOWNLOAD_LIST
);

const allFilterData = ref<ArchList[]>([]);

const scenarioList = [...i18n.value.download.SCENARIO_LIST];

const archList = ref<string[]>([i18n.value.download.ALL_DATA]);

const activeArch = ref(0);
const activeScenario = ref(0);
const currentPage = ref(1);
const pageSize = ref(10);
const searchContent = ref('');
const allData = ref<ArchList[]>([]);

const filterCondition = reactive({
  search: '',
  scenario: '',
  arch: '',
});

const randerData = computed(() => {
  return allFilterData.value.slice(
    pageSize.value * (currentPage.value - 1),
    pageSize.value * currentPage.value
  );
});

// 移动端翻页

const changeCurrentPageMoblie = (val: string) => {
  if (val === 'prev' && currentPage.value > 1) {
    currentPage.value = currentPage.value - 1;
  } else if (val === 'next' && currentPage.value < allFilterData.value.length) {
    currentPage.value = currentPage.value + 1;
  }
};

downloadData.forEach((version) => {
  version.DETAILED_LINK?.forEach((arch: ArchList) => {
    arch['NAME'] = version.NAME;
    arch['PUBLISH_DATE'] = version.PUBLISH_DATE;
    allData.value.push(arch);
    // 获取所有架构
    archList.value.includes(arch.ARCH) ? '' : archList.value.push(arch.ARCH);
  });
  // 按发布时间排序
  changeOrder(allData.value, '');
});

function getFilterData() {
  allFilterData.value = [];
  allData.value.forEach((arch) => {
    // 架构 应用场景 搜索取交集
    if (
      filterCondition.arch ||
      filterCondition.scenario ||
      filterCondition.search
    ) {
      if (
        (filterCondition.arch ? arch.ARCH === filterCondition.arch : true) &&
        (filterCondition.scenario
          ? arch.SCENARIO === filterCondition.scenario
          : true) &&
        (filterCondition.search
          ? arch.NAME.toLowerCase().includes(
              filterCondition.search.toLowerCase()
            )
          : true)
      ) {
        allFilterData.value.push(arch);
      }
      // 无筛选条件返回所有
    } else {
      allFilterData.value.push(arch);
    }
  });
}

function getScenarioValue(val: string) {
  return scenarioList.filter((item) => {
    return item.KEY === val;
  })[0].VALUE;
}
//排序字段为空处理
function changeOrder(list: any, order: string) {
  list.sort((a: any, b: any) => {
    if (a.PUBLISH_DATE === b.PUBLISH_DATE) {
      return 0;
    } else if (a.PUBLISH_DATE === '') {
      return 1;
    } else if (b.PUBLISH_DATE === '') {
      return -1;
    } else if (order === 'ascending') {
      // 升序
      return a.PUBLISH_DATE < b.PUBLISH_DATE ? -1 : 1;
    } else {
      // 降序
      return a.PUBLISH_DATE < b.PUBLISH_DATE ? 1 : -1;
    }
  });
}

const selectArchtag = (i: number, category: string) => {
  activeArch.value = i;
  if (category === i18n.value.download.ALL_DATA) {
    filterCondition.arch = '';
    return;
  }
  filterCondition.arch = category;
};

const selectScenarioTag = (i: number, category: string) => {
  activeScenario.value = i;
  filterCondition.scenario = category;
};

const changeSearchVal = (val: string) => {
  filterCondition.search = val;
};

watch(
  filterCondition,
  () => {
    currentPage.value = 1;
    getFilterData();
  },
  {
    immediate: true,
  }
);
</script>
<template>
  <AppContent :mobile-top="16">
    <OSearch
      v-model="searchContent"
      class="o-search"
      :placeholder="i18n.download.VERSION"
      @change="changeSearchVal"
    ></OSearch>
    <div class="filter-card">
      <TagFilter :label="i18n.download.ARCHITECTURE" :show="false">
        <OTag
          v-for="(item, index) in archList"
          :key="item"
          checkable
          :type="activeArch === index ? 'primary' : 'text'"
          @click="selectArchtag(index, item)"
        >
          {{ item }}
        </OTag>
      </TagFilter>
      <TagFilter :label="i18n.download.SCENARIO" :show="false">
        <OTag
          v-for="(item, index) in i18n.download.SCENARIO_LIST"
          :key="item"
          checkable
          :type="activeScenario === index ? 'primary' : 'text'"
          @click="selectScenarioTag(index, item.KEY)"
        >
          {{ item.VALUE }}
        </OTag>
      </TagFilter>
    </div>
    <ClientOnly>
      <div class="filter-mobile">
        <div class="filter">
          <div
            v-for="(item, index) in archList"
            :key="index"
            :class="activeArch === index ? 'selected' : ''"
            class="filter-item"
            @click="selectArchtag(index, item)"
          >
            {{ item }}
          </div>
        </div>
        <div class="filter">
          <div
            v-for="(item, index) in i18n.download.SCENARIO_LIST"
            :key="item.KEY"
            :class="activeScenario === index ? 'selected' : ''"
            class="filter-item"
            @click="selectScenarioTag(index, item.KEY)"
          >
            {{ item.VALUE }}
          </div>
        </div>
      </div>
      <ul class="mobile-list">
        <li v-for="(item, index) in randerData" :key="index" class="item">
          <ul>
            <li>
              <span>{{ i18n.download.VERSION }}:</span>{{ item.NAME }}
            </li>
            <li>
              <span>{{ i18n.download.DOWNLOAD_LINK }}:</span
              ><a :href="item.LINK" target="_blank">{{ item.LINK }}</a>
            </li>
            <li>
              <span>{{ i18n.download.ARCHITECTURE }}:</span>{{ item.ARCH }}
            </li>
            <li>
              <span>{{ i18n.download.SCENARIO }}:</span>
              {{ getScenarioValue(item.SCENARIO as string) }}
            </li>
            <li>
              <span>{{ i18n.cve.RELEASE_DATE }}:</span>{{ item.PUBLISH_DATE }}
            </li>
          </ul>
        </li>
      </ul>
    </ClientOnly>
    <OTable class="pc-list" :data="randerData">
      <el-table-column :label="i18n.download.VERSION" width="200">
        <template #default="scope">
          {{ scope.row?.NAME }}
        </template>
      </el-table-column>
      <el-table-column :label="i18n.download.DOWNLOAD_LINK">
        <template #default="scope">
          <a :href="scope.row?.LINK" target="_blank">{{ scope.row?.LINK }}</a>
        </template>
      </el-table-column>
      <el-table-column :label="i18n.download.SCENARIO" width="200">
        <template #default="scope">
          {{ getScenarioValue(scope.row?.SCENARIO) }}
        </template>
      </el-table-column>
      <OTableColumn
        :label="i18n.download.ARCHITECTURE"
        prop="ARCH"
        width="150"
      ></OTableColumn>
      <el-table-column :label="i18n.download.RELEASE_DATE" width="200">
        <template #default="scope">
          {{ scope.row?.PUBLISH_DATE }}
        </template>
      </el-table-column>
    </OTable>

    <div v-if="!randerData.length" class="empty-status">
      {{ i18n.cve.EMPTY_SEARCH_RESULT }}
    </div>

    <ClientOnly>
      <OPagination
        v-if="randerData.length"
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        class="pagination"
        :page-sizes="[10, 20, 40]"
        :background="true"
        layout="sizes, prev, pager, next, slot, jumper"
        :total="allFilterData.length"
      >
        <span class="pagination-slot"
          >{{
            pageSize * currentPage < allFilterData.length
              ? pageSize * currentPage
              : allFilterData.length
          }}
          / {{ allFilterData.length }}</span
        >
      </OPagination>
    </ClientOnly>

    <AppPaginationMo
      :current-page="currentPage"
      :total-page="allFilterData.length"
      @turn-page="changeCurrentPageMoblie"
    >
    </AppPaginationMo>
  </AppContent>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  :deep(.el-input .el-input__wrapper) {
    .el-input__inner {
      font-size: var(--o-font-size-tip);
    }
    .el-input__prefix-inner {
      font-size: var(--o-font-size-h8) !important;
    }
  }
}
.o-search {
  height: 48px;
  @media screen and (max-width: 768px) {
    height: 36px;
    margin-bottom: var(--o-spacing-h6);
  }
}
.filter-card {
  margin: var(--o-spacing-h4) 0;
  background-color: var(--o-color-bg2);
  padding: var(--o-spacing-h5) var(--o-spacing-h2);
  @media screen and (max-width: 768px) {
    display: none;
  }
  :deep(.tag-filter) {
    .label {
      width: 80px;
    }
  }
}
.filter-mobile {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-bottom: var(--o-spacing-h6);
  }
  .filter {
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: var(--o-spacing-h8);

    .filter-item {
      cursor: pointer;
      flex: 1;
      min-width: 63px;
      text-align: center;
      padding: var(--o-spacing-h9) 0;
      font-size: var(--o-font-size-tip);
      font-weight: 400;
      color: var(--o-color-brand1);
      line-height: var(--o-line-height-text);
      border: 1px solid var(--o-color-brand1);
      border-right: 0;
      &:last-child {
        border: 1px solid var(--o-color-brand1);
      }
    }
    .selected {
      background-color: var(--o-color-brand1);
      color: var(--o-color-text2);
    }
  }
}

.empty-status {
  display: none;
  text-align: center;
  font-size: var(--o-font-size-tip);
  color: var(--o-color-text4);
  line-height: var(--o-spacing-tip);
  padding: var(--o-spacing-h2) 0 var(--o-spacing-h5);
  @media screen and (max-width: 768px) {
    display: block;
  }
}
.mobile-list {
  display: none;
  margin-bottom: var(--o-spacing-h5);
  box-shadow: var(--o-shadow1);
  @media screen and (max-width: 768px) {
    display: block;
  }
  .item {
    padding: var(--o-spacing-h5);
    font-size: var(--o-font-size-tip);
    font-weight: 400;
    color: #999999;
    line-height: var(--o-line-height-tip);
    background-color: var(--o-color-bg2);
    &:nth-child(odd) {
      background: var(--o-color-bg4);
    }
    & li {
      margin-bottom: var(--o-spacing-h8);
    }
    li:last-child {
      margin-bottom: 0;
      a {
        color: var(--o-color-link1);
      }
    }
    li:nth-child(2) {
      display: flex;
      span {
        min-width: 30px;
      }
    }
    span {
      color: var(--o-color-text1);
      margin-right: var(--o-spacing-h8);
    }
  }
}
.pc-list {
  margin-bottom: var(--o-spacing-h2);
  .detail-page {
    cursor: pointer;
    color: var(--o-color-link1);
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.pagination {
  margin: var(--o-spacing-h2) 0 0 0;
  .pagination-slot {
    font-size: var(--o-font-size-text);
    font-weight: 400;
    color: var(--o-color-text1);
    line-height: var(--o-spacing-h4);
  }
}
</style>

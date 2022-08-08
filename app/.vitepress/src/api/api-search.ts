import { request } from '@/shared/axios';
import type { AxiosResponse } from '@/shared/axios';

/**
 * 通用筛选
 * @name getSortData
 * @param {
 * page:1,
 * pageSize:10,
 * lang:'zh',
 * category:'blog'
 * }
 * @return  {
 * archives?:string,
 * articleName?: string,
 * author?:      string,
 * category?:    string,
 * date?:        string,
 * deleteType?:  string,
 * lang?:        string,
 * path?:        string,
 * summary?:     string;
 * tags?:        string[],
 * textContent?: string,
 * title?:       string,
 * type?:        string,
 *}
 */

interface SortParams {
  category: string;
  lang: string;
  page: number;
  pageSize: number;
}

export function getSortData(params: SortParams) {
  const url = '/api-search-v2/search/sort';
  return request.post(url, params).then((res: AxiosResponse) => res.data);
}

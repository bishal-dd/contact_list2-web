import deepmerge from 'deepmerge'
import { Options, Query } from './type'

export const getAllContact = (options?: Options, deepMergeOptions?: deepmerge.Options): Query =>
  deepmerge<Query>(
    {},
    (options || {}) as Query,
    {
      arrayMerge(target: unknown[], source: unknown[]): unknown[] {
        if (!source.length) return source;

        return [...target, ...source];
      },
      ...deepMergeOptions,
    }
  )

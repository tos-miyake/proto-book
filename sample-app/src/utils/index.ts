import { useMemo } from 'react'

/**複数のクラス名を合成して、１つの文字列に結合する。undefinedが混じってもOK */
export const useClassNames = (...names: ReadonlyArray<string | undefined>) => {
    return useMemo(() => names.filter((name) => !!name).join(' '), [names])
}
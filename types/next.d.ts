import type {
  ReadonlyHeaders,
  ReadonlyRequestCookies,
} from "next/dist/server/web/spec-extension/adapters/headers";

declare module "next" {
  export type PageProps<
    TParams extends Record<string, string> = {},
    TSearchParams extends Record<string, string | string[]> = {}
  > = {
    params: TParams;
    searchParams: TSearchParams;
    headers?: ReadonlyHeaders;
    cookies?: ReadonlyRequestCookies;
  };
}

# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 5.0.0 (2023-11-25)


### Bug Fixes

* Do not scroll to top on query param change with App Router. If you need to retain the previous behavior, you can scroll to the top _additionally_, after changing a query param ([#42](https://github.com/amannn/next-query-params/issues/42) by [@gregor10](https://github.com/gregor10)) ([0f5fb5c](https://github.com/amannn/next-query-params/commit/0f5fb5c465eb712f03d2bfc9897afe72fd2f42d2))


### BREAKING CHANGES

* Changing a query param with the App Router no longer results in the app scrolling to the top.





## 4.3.1 (2023-11-25)

**Note:** Version bump only for package example-app





# 4.3.0 (2023-11-02)


### Features

* Support Next.js 14 ([#39](https://github.com/amannn/next-query-params/issues/39) by [@davidblurton](https://github.com/davidblurton)) ([ede406d](https://github.com/amannn/next-query-params/commit/ede406d4a9886a1c8907736df29895f95370df9d))





## 4.2.3 (2023-07-13)


### Bug Fixes

* Add CJS build for App Router entry point ([#36](https://github.com/amannn/next-query-params/issues/36)) ([5e034cf](https://github.com/amannn/next-query-params/commit/5e034cf567b1ee3d164b8f8ac7355cc224647d1f))





## 4.2.2 (2023-06-20)


### Bug Fixes

* Remove `memo` wrappers to address a TypeScript issue ([#34](https://github.com/amannn/next-query-params/issues/34) by [@jmonster](https://github.com/jmonster)) ([1f73680](https://github.com/amannn/next-query-params/commit/1f7368048554744847ff589c55dcbc95aa7cf1ee))





## 4.2.1 (2023-05-21)


### Bug Fixes

* Fix cjs export for pages adapter ([#30](https://github.com/amannn/next-query-params/issues/30)) ([0ebd81d](https://github.com/amannn/next-query-params/commit/0ebd81d77d78760a4d06c727f192946d35b6d0d9))





# 4.2.0 (2023-05-19)


### Features

* Add support for App Router ([#27](https://github.com/amannn/next-query-params/issues/27)) ([161604f](https://github.com/amannn/next-query-params/commit/161604fe0e518e05152ce9789a68661fcc28df81))





# 4.1.0 (2022-11-16)


### Features

* Suppport Next.js 13 ([#24](https://github.com/amannn/next-query-params/issues/24)) ([790e626](https://github.com/amannn/next-query-params/commit/790e626e857335ccf11c5811b12415e92b422b60))





# 4.0.0 (2022-08-30)


* feat!: Upgrade to use-query-params@v2 (#19) ([40eee87](https://github.com/amannn/next-query-params/commit/40eee8734aebf498955e0bb24353d287877a32ad)), closes [#19](https://github.com/amannn/next-query-params/issues/19)


### BREAKING CHANGES

* Since `use-query-params@v2` now supports the concept of adapters, this library now only exports such an adapter. Please update your imports to reference `use-query-params` as only the adapter is now exported from this library.





# 3.0.0 (2022-07-15)


* feat!: Support React 18 and latest Next.js version (#12) ([515a24f](https://github.com/amannn/next-query-params/commit/515a24f864d97ecdbba6de12de490b895d88153c)), closes [#12](https://github.com/amannn/next-query-params/issues/12)


### BREAKING CHANGES

* Drop IE11 support

* v3.0.0-alpha.1





## 2.2.1 (2022-05-03)

**Note:** Version bump only for package example





# 2.2.0 (2022-04-28)


### Features

* Allow `shallow` prop on the provider ([#13](https://github.com/amannn/next-query-params/issues/13)) ([71b6ec8](https://github.com/amannn/next-query-params/commit/71b6ec8631af355ef283a0f588e9f80c347176eb))





## 2.1.2 (2021-12-17)


### Bug Fixes

* Handle clearing of parameters and adding of parameters with an existing hash ([#9](https://github.com/amannn/next-query-params/issues/9)) ([0640b57](https://github.com/amannn/next-query-params/commit/0640b5739141bfc36b5e60bb8c87b32a6d53ac10))





## 2.1.1 (2021-12-17)

**Note:** Version bump only for package example





# 2.1.0 (2021-12-15)


### Features

* Support Next.js 12 ([#8](https://github.com/amannn/next-query-params/issues/8)) ([6c766d2](https://github.com/amannn/next-query-params/commit/6c766d2095cdbc587f2555cea35ff82b2d30c4f6))





## 2.0.5 (2021-11-30)

**Note:** Version bump only for package example





## 2.0.4 (2021-11-30)

**Note:** Version bump only for package example





## 2.0.3 (2021-10-25)


### Bug Fixes

* Include types for exports from `use-query-params` ([5d57f0e](https://github.com/amannn/next-query-params/commit/5d57f0eab2a055d3c51f0815989cde3fefc76274))





## 2.0.2 (2021-09-15)

**Note:** Version bump only for package example





## 2.0.1 (2021-09-06)

**Note:** Version bump only for package example

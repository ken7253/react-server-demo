export default {
  root: "src/app",
  public: "public",
  page(config) {
    return {
      ...config,
      includes: ["**/page.tsx"],
    };
  },
  layout(config) {
    return {
      ...config,
      includes: ["**/layout.tsx"],
    };
  },
};

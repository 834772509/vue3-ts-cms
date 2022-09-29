import { ref } from "vue";
import type PageContent from "@/components/page-content";

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();

  const handleResetClick = () => {
    pageContentRef.value?.getPageData();
  };
  const handleSearchClick = (formData: any) => {
    pageContentRef.value?.getPageData(formData);
  };

  return [pageContentRef, handleResetClick, handleSearchClick];
}

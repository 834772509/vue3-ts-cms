import { ref } from "vue";
import type PageModal from "@/components/page-modal";

export function usePageModal() {
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  const defaultInfo = ref({});

  const handleNewData = () => {
    defaultInfo.value = {};

    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
  };

  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item };

    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
  };

  return [pageModalRef, defaultInfo, handleNewData, handleEditData];
}

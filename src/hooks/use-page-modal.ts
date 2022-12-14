import { ref } from "vue";
import type PageModal from "@/components/page-modal";

type CallbackFn = (item?: any) => void;

export function usePageModal(
  newCallBack?: CallbackFn,
  editCallBack?: CallbackFn
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  const defaultInfo = ref({});

  const handleNewData = () => {
    defaultInfo.value = {};

    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }

    newCallBack && newCallBack();
  };

  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item };

    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }

    editCallBack && editCallBack(item);
  };

  return { pageModalRef, defaultInfo, handleNewData, handleEditData };
}

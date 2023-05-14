import { useState } from "react";

export interface UseDialogRes {
 isVisible: boolean;
 handleOpen: () => void;
 handleClose: () => void;
}

interface UseDialogProps {
 initialState: boolean;
 onOpen: () => void;
 onClose: () => void;
}

const defaultValues = {
 initialState: false,
 onClose: () => {},
 onOpen: () => {},
};

const useDialog = (props?: Partial<UseDialogProps>): UseDialogRes => {
 const { initialState, onOpen, onClose } = Object.assign(defaultValues, props);
 const [isVisible, setIsVisible] = useState(initialState);
 const handleOpen = (): void => {
  setIsVisible(true);
  onOpen();
 };

 const handleClose = (): void => {
  setIsVisible(false);
  onClose();
 };

 return { isVisible, handleOpen, handleClose };
};

export default useDialog;

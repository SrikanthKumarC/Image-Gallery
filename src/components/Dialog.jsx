import * as Dialog from "@radix-ui/react-dialog";

const DialogComponent = ({ children }) => {
  return <Dialog.Root>{children}</Dialog.Root>;
};

const DialogContent = ({ children }) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className=" bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-w-[80vw] max-h-[90vh] w-[90vw] h-[90vh] bg-yellow-300 flex  justify-center items-center  translate-x-[-50%] translate-y-[-50%] rounded-[6px] overflow-clip focus:outline-none border-2 border-yellow-600">
        {children}
        <Dialog.Close>Close</Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

DialogComponent.Trigger = Dialog.Trigger;
DialogComponent.Content = DialogContent;
export default DialogComponent;

const Modal = ({
  id,
  modalTitle,
  children,
}: {
  id: number;
  modalTitle: string;
  children: React.ReactNode;
}) => {
  return (
    <dialog id={`my_modal_${id}`} className="modal">
      <div className="flex flex-col items-center modal-box bg-white text-black dark:bg-gray dark:text-white">
        <h3 className="font-bold text-md">{modalTitle}</h3>
        <ul className="p-6 list-disc text-sm">{children}</ul>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;

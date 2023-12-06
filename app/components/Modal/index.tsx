import Image from "next/image";

export default function Modal({
  id,
  modalTitle,
  children,
  image,
}: {
  id: number;
  modalTitle: string;
  children: React.ReactNode;
  image: string;
}) {
  return (
    <dialog id={`my_modal_${id}`} className="modal">
      <div className="flex flex-col items-center modal-box bg-white text-black dark:bg-gray dark:text-white">
        <div className="flex gap-3 items-center">
          <Image
            src={image}
            alt={modalTitle}
            width={40}
            height={40}
            className="rounded-full"
          />
          <h3 className="font-semibold text-md">{modalTitle}</h3>
        </div>
        <ul className="p-6 list-disc text-sm">{children}</ul>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

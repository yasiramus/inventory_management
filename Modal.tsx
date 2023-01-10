const Modal = ({
  open,
  close,
  children,
}: {
  open: boolean;
  close: Function;
  children: string;
}) => {
  // this is a guard for
  // if open is true else if it false it should excute the code within the else block
  if (!open) {
    return <></>;
  } else {
    return (
      <>
        <div className="fixed top-0 right-0 bottom-0 left-0 z-50" id="overlay">
          <div className="bg-stone-50 fixed top-1/2 left-1/2 z-50 p-12 -translate-x-2/4 -translate-y-2/4 flex flex-col items-center">
            <p className="text-center pb-2 font-medium text-base capitalize">
              {children}
            </p>

            <button
              type="submit"
              onClick={() => {
                close();
              }}
              className="sm:text-sm lg:text-base lg:py-2 lg:px-4 sm:p-2 text-white rounded-md bg-indigo-600 font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Okay
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Modal;

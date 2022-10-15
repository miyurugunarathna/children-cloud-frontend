import Header from "../components/Header";

export const Babysitters = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col max-w-4xl mx-auto items-center">
        <div className="my-4">
          <h1 className="text-4xl">Babysitters</h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border border-black/20 w-full max-w-lg rounded flex flex-row justify-between gap-10 items-center p-4">
            <div className="flex flex-row">
              <div className="flex flex-col gap-1 items-center">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-slate-100 outline-dashed outline-black/40 outline-1 outline-offset-8 mb-3">
                  {true ? (
                    <img
                      className="rounded-full object-cover"
                      src="https://firebasestorage.googleapis.com/v0/b/the-children-cloud.appspot.com/o/276158220_689752729112571_8919827001946299820_n.jpg?alt=media&token=4b6b54ae-5761-4949-bc10-5a97c3671112"
                      alt="M"
                    />
                  ) : (
                    <span className="text-3xl text-slate-300 font-semibold">
                      {user.firstName?.charAt(0)}
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold my-0">Coco Xuuu</h4>
                <span className="bg-black text-white w-fit text-xs py-1 px-2 rounded">
                  My Kido
                </span>
              </div>
              <span className="w-[1px] bg-black/10 mx-4" />
              <div className="flex flex-col gap-1 items-center">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-slate-100 outline-dashed outline-black/40 outline-1 outline-offset-8 mb-3">
                  {true ? (
                    <img
                      className="rounded-full object-cover"
                      src="https://firebasestorage.googleapis.com/v0/b/the-children-cloud.appspot.com/o/276158220_689752729112571_8919827001946299820_n.jpg?alt=media&token=4b6b54ae-5761-4949-bc10-5a97c3671112"
                      alt="M"
                    />
                  ) : (
                    <span className="text-3xl text-slate-300 font-semibold">
                      {user.firstName?.charAt(0)}
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold my-0">Coco Xuuu</h4>
                <span className="bg-black text-white w-fit text-xs py-1 px-2 rounded">
                  Babysitter
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-bold">+94776424889</h4>
              <a
                href={`tel:+94776424889`}
                className="text-black text-sm no-underline rounded-sm border border-black px-3 py-1">
                Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

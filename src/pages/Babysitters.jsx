import Header from "../components/Header";
import staffRequest from "../api/Staff/staff.request";
import childRequest from "../api/child/child.request";
import { useEffect, useState } from "react";
import { SUCCESS } from "../constants";

export const Babysitters = () => {
  const [children, setchildren] = useState([]);
  const [staff, setStaff] = useState([]);
  const [assign, setAssign] = useState([]);
  const [babySitters, setBabySitters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let count = 1;
    const fetch = async () => {
      const [r1, r2, r3] = await Promise.all([
        childRequest.getChildsOfParent(),
        staffRequest.getBabysitters(),
        staffRequest.getStaff({ filter: { type: "BabySitter" } }),
      ]);
      if (r2?.status === SUCCESS && r2?.data) setAssign(r2.data);
      if (r3?.status === SUCCESS && r3?.data) setStaff(r3.data);
      if (r1?.status === SUCCESS && r1?.data) setchildren(r1.data);
      count++;
    };
    if (count === 1) fetch();
  }, []);

  useEffect(() => {
    if (children.length > 0) {
      let array = [];
      children.map((child) => {
        const a = assign.find(
          (s) =>
            s?.child01 === child?.name ||
            s?.child02 === child?.name ||
            s?.child03 === child?.name,
        );
        if (a) {
          const s = staff.find((st) => a?.BabySitter === st?.empID);
          if (s) {
            const { fullName, phoneNo, image } = s;
            const { name, image: kidImg } = child;

            array = [
              ...array,
              {
                kidName: name,
                kidImage: kidImg,
                name: fullName,
                image: image,
                mobile: phoneNo,
              },
            ];
          }
        }
      });
      setBabySitters(array);
      setLoading(false);
    }
  }, [children]);

  return (
    <>
      <Header />
      <div className="flex flex-col max-w-4xl mx-auto items-center">
        <div className="my-4">
          <h1 className="text-4xl">Babysitters</h1>
        </div>
        <div className="flex flex-col gap-4">
          {loading ? (
            <div className="flex justify-center items-center text-black/50 text-lg">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#000"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="#000"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              loading...
            </div>
          ) : babySitters.length > 0 ? (
            babySitters.map((data, key) => (
              <div
                key={key}
                className="border border-black/20 w-full max-w-lg rounded flex flex-row justify-between gap-10 items-center p-4">
                <div className="flex flex-row">
                  <div className="flex flex-col gap-1 items-center">
                    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-slate-100 outline-dashed outline-black/40 outline-1 outline-offset-8 mb-3">
                      {data.kidImage ? (
                        <img
                          className="rounded-full w-24 h-24 object-top object-cover"
                          src={data.kidImage}
                          alt="M"
                        />
                      ) : (
                        <span className="text-3xl text-slate-300 font-semibold">
                          {data.kidName?.charAt(0)}
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold my-0">{data.kidName}</h4>
                    <span className="bg-black text-white w-fit text-xs py-1 px-2 rounded">
                      My Kido
                    </span>
                  </div>
                  <span className="w-[1px] bg-black/10 mx-4" />
                  <div className="flex flex-col gap-1 items-center">
                    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-slate-100 outline-dashed outline-black/40 outline-1 outline-offset-8 mb-3">
                      {data.image ? (
                        <img
                          className="rounded-full w-24 h-24 object-top object-cover"
                          src={data.image}
                          alt="M"
                        />
                      ) : (
                        <span className="text-3xl text-slate-300 font-semibold">
                          {data.name?.charAt(0)}
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold my-0">{data.name}</h4>
                    <span className="bg-black text-white w-fit text-xs py-1 px-2 rounded">
                      Babysitter
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="text-lg font-bold">{data.mobile}</h4>
                  <a
                    href={`tel:${data.mobile}`}
                    className="text-black text-sm no-underline rounded-sm border border-black px-3 py-1">
                    Call
                  </a>
                </div>
              </div>
            ))
          ) : (
            <h4 className="text-lg text-black/40 font-normal">
              No babysitters was assigned!
            </h4>
          )}
        </div>
      </div>
    </>
  );
};

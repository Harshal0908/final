export default function Header({ handlePrint }) {
  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div className="flex flex-col items-center justify-center mt-10">
          <h3 className="font-semibold uppercase tracking-wide text-xl  mb-3">
            Bramha Ayurved & Panchkarma Clinic
          </h3>
          {/* <h3 className="font-semibold uppercase tracking-wide text-xl mb-3"></h3> */}

          <p className="font-semibold text-sm">Dr. Vitthal Shinde</p>
          <p className="font-semibold text-sm mb-3">
            MD (AYU); D.Y.A; C.C.H. Reg. No: I-48448.A
          </p>
        </div>
      </header>
    </>
  );
}

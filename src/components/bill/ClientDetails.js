export default function ClientDetails({
  clientName,
  clientAddress,
  clientNumber,
}) {
  return (
    <>
      <section className="mt-12">
        <div>
          Patient's Name:
          <span className="text-md uppercase font-semibold mb-1">
            {" "}
            {clientName}
          </span>
        </div>
        <div>
          Address:
          <span className="text-md  font-semibold mb-1"> {clientAddress}</span>
        </div>
        <div>
          Number:
          <span className="text-md  font-semibold mb-1"> {clientNumber}</span>
        </div>
      </section>
    </>
  );
}

export default function Footer({
  name,
  email,
  website,
  phone,
  bankAccount,
  bankName,
}) {
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <div className="flex flex-wrap items-center justify-center">
          <p className="font-semibold">
            Flat No: 05, Popular Nook, Near Mental Corner, ALandi Road,
            Vishrantwadi, Pune-411006.
          </p>
          <span className="font-semibold"> Mob: 9970383861.</span>
        </div>
      </footer>
    </>
  );
}

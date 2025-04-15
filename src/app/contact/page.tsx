import { Button } from "@mui/material";

const Contact = () => {
  return (
    <div className="m-auto max-w-[1200px] p-[20px]">
      <p className="text-gray-600">Home / Contact</p>

      <div className="flex justify-between gap-6">
        <div className="shadow-md w-auto flex flex-col gap-5 p-5">
          <div className="flex flex-col gap-4 p-6 border-b">
            <div className="flex gap-4 items-center">
              <img src="../../../src/assets/icons-phone (1).png" alt="Phone" />
              <h1 className="text-lg font-semibold">Call To Us</h1>
            </div>
            <p>
              We are available 24/7, 7 days a week. <br />
              Phone: +8801611112222
            </p>
          </div>

          <div className="flex flex-col gap-4 p-6 border-b">
            <div className="flex gap-4 items-center">
              <img src="/src/assets/icons-mail.png" alt="Email" />
              <h1 className="text-lg font-semibold">Write To Us</h1>
            </div>
            <p>
              Fill out our contact form, and we’ll get back to you shortly.
            </p>
          </div>
        </div>

        <div className="shadow-md w-full p-6 flex flex-col gap-4">
          <div className="flex gap-4">
            <input type="text" placeholder="Name" className="border p-3 rounded w-full" />
            <input type="text" placeholder="Email" className="border p-3 rounded w-full" />
            <input type="text" placeholder="Phone" className="border p-3 rounded w-full" />
          </div>
          <textarea placeholder="Your Message" className="border p-3 rounded w-full h-32"></textarea>
          <Button variant="contained" style={{ backgroundColor: "#DB4444", width: "full" }}>
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

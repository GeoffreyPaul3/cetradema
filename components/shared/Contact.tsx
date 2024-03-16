import React from "react";

const Contact = () => {
  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-contain">
      <div className=" grid grid-cols-1 gap-5 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <p className="p-regular-20 md:p-regular-24">
            Ready to embark on a transformative journey with us?
          </p>

          <p className="p-regular-20 md:p-regular-24">
            Reach out to CETRADEMA today at <br />{" "}
            cetradema.transformative@gmail.com or visit our Lilongwe or Blantyre
            offices.
          </p>

          <p className="p-regular-20 md:p-regular-24">
            P.O Box 135, Lilongwe, <br />
            Behind NBS, Tutlas Building <br />
            Tel: 0999 273 513 / 0888 973 513 / 0888 516 652 <br />
          </p>

          <p className="p-regular-20 md:p-regular-24">
            Blantyre Offices located near AECDM Offices
          </p>

          <p className="p-regular-20 md:p-regular-24">
            Let`s create a future free from poverty, together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

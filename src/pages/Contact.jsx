import ContactInfo from '../components/ContactInfo';
import OrderButtons from '../components/OrderButtons';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Contact Hero Section */}
      <div className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/src/assets/images/dishes/dish8.png")',
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have questions or want to make a reservation? We're here to help!
            </p>
          </div>

          {/* Contact Information */}
          <ContactInfo />

          {/* Order Buttons */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-primary mb-8">
              Order Online
            </h2>
            <OrderButtons />
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.5!2d14.5!3d35.9!4m5!3m4!1s0x0:0x0!8m2!3d35.9!4d14.5"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
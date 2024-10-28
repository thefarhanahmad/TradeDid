import React from "react";
import { Facebook, Youtube, Linkedin, Twitter } from "lucide-react";

const Card = ({ title, children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    <h2 className="text-2xl font-bold text-orange-500 mb-4">{title}</h2>
    {children}
  </div>
);

const PhoneNumber = ({ location, number }) => (
  <div className="mb-2 ">
    <span className="font-normal text-blue-900">{location}: </span>
    <span className="text-blue-900">{number}</span>
  </div>
);

const EmailAddress = ({ department, email }) => (
  <div className="mb-2">
    <span className="font-semibold text-blue-900">{department}: </span>
    <a href={`mailto:${email}`} className="text-blue-900 hover:underline">
      {email}
    </a>
  </div>
);

const SocialIcon = ({ Icon, name }) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mb-2">
      <Icon className="text-white" size={24} />
    </div>
    <span className="text-blue-900 text-sm">{name}</span>
  </div>
);

export default function ContactInfo() {
  return (
    <div className="container mx-auto p-4 my-10 bg-orange-50">
      <Card title="Phone Numbers" className="mb-6">
        <div className="grid md:grid-cols-3  items-end gap-4">
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Sales:</h3>
            <PhoneNumber location="US, New York" number="+1 (212) 660 0065" />
            <PhoneNumber location="UK, London" number="+44 (20) 8099 5011" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Customer service:
            </h3>
            <PhoneNumber location="CA, Toronto" number="+1 (416) 9003775" />
            <PhoneNumber location="US, New York" number="+1 (718) 766 7744" />
          </div>
          <div>
            <PhoneNumber location="CA, Toronto" number="+1 (416) 9003775" />
            <PhoneNumber location="US, New York" number="+1 (718) 766 7744" />
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <Card title="Live chat assistance">
          <p className="text-blue-900">
            Highly professional team available 24/7/365.
          </p>
        </Card>

        <Card title="Social Media">
          <div className="flex justify-between">
            <SocialIcon Icon={Facebook} name="Facebook" />
            <SocialIcon Icon={Youtube} name="YouTube" />
            <SocialIcon Icon={Linkedin} name="LinkedIn" />
            <SocialIcon Icon={Twitter} name="Twitter" />
          </div>
        </Card>

        <Card title="Address">
          <p className="text-blue-900">
            TRADEDID Ireland Limited
            <br />
            11 The Haven, Malahide, Co.
            <br />
            Dublin, K36 R983,
            <br />
            Ireland
          </p>
        </Card>
      </div>

      <Card title="Emails">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <EmailAddress
              department="Customer service"
              email="customer.care@tradedid.com"
            />
            <EmailAddress
              department="Technical support"
              email="support@tradedid.com"
            />
          </div>
          <div>
            <EmailAddress department="Sales" email="sales@tradedid.com" />
            <EmailAddress department="Porting" email="lnp@tradedid.com" />
          </div>
          <div>
            <EmailAddress
              department="Compliance"
              email="activity@tradedid.com"
            />
            <EmailAddress
              department="Carrier relations"
              email="cr@tradedid.com"
            />
          </div>
          <div>
            <EmailAddress
              department="Marketing"
              email="marketing@tradedid.com"
            />
            <EmailAddress department="HR" email="hr@tradedid.com" />
          </div>
        </div>
      </Card>
    </div>
  );
}

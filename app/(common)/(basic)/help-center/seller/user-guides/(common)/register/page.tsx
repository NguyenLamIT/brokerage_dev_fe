import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="text-xl">
      <h2>Signing up as a supplier</h2>
      <div className="text-xl py-4 pt-8">
        How to create a supplier account on Trade4go :
      </div>
      <div className="py-6">
        <ol className="list-decimal text-xl flex flex-col gap-2 px-6">
          <li className="pl-4">
            <span className="">
              Enter your work email address and password.
            </span>
          </li>
          <li className="pl-4">
            <span className="">
              Choose your company from the provided list of companies that share
              the same work email you previously entered. If your company is not
              on the list, create a new company by entering the name (preferably
              in English), country, website, and, if applicable, core business
              type, annual sales revenue, and number of employees.
            </span>
          </li>
          <li className="pl-4">
            <span className="">
              Insert your first and last name, job level, your department’s
              role, and select ‘Selling and marketing agri products and
              services’ from the list of interest.
            </span>
          </li>
          <li className="pl-4">
            Select products that you want to sell to receive personalized
            content and recommendations.
          </li>
          <li className="pl-4">
            Check your email inbox for the verification link and click{" "}
            <span className="font-medium">Verify</span> to complete sign-up
            process.
          </li>
          <li className="pl-4">
            Once sign up is complete, you must publish a basic supplier profile. Refer to the guides below to learn
            more.
            <div className="pt-2">
              <Link
                color="primary"
                className="text-blue-800"
                href="/help-center/seller/user-guides/basic"
              >
                Publish your basic supplier profile
              </Link>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Register;

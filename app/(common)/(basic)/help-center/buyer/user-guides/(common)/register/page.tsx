import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div>
      <h2>Signing up as a buyer</h2>
      <div className="text-xl py-4 pt-8">
        How to create a buyer account on Trade4go :
      </div>
      <ol className="list-decimal text-xl flex flex-col gap-2 px-4">
        <li className="pl-4">Enter your work email address and password.</li>
        <li className="pl-4">
          Choose your company from the provided list of companies that share the
          same work email you previously entered. If your company is not on the
          list, create a new company by entering the name (preferably in
          English), country, website, and, if applicable, core business type,
          annual sales revenue, and number of employees.
        </li>
        <li className="pl-4">
          Insert your first and last name, job level, your department’s role,
          and select ‘Sourcing and purchasing the best quality of agri products’
          from the list of interest.
        </li>
        <li className="pl-4">
          Select products that you’re interested in sourcing to receive
          personalized content and recommendations.
        </li>
        <li className="pl-4">
          Check your email inbox for the verification link and click{" "}
          <span color="onSurfaceSubtle">Verify</span> to complete sign-up
          process.
        </li>
      </ol>
      <div className="pt-6">
        <span className="text-xl">
          Note: If you have not registered with a Trade4go -verified work email,
          you need to upload business documents to become a verified buyer.
          Click{" "}
          <Link
            href="/help-center/buyer/user-guides/verification"
            className="text-blue-600"
          >
            here
          </Link>{" "}
          to learn more.
        </span>
      </div>
    </div>
  );
};

export default Register;

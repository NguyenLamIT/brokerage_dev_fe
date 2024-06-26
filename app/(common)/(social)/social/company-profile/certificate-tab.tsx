"use client";
import { useState } from "react";
import AddProduct from "./add-product";
import Image from "next/image";
import NewCertificate from "./new-certificate";

const CertificateTab = ({ certifications, setCertifications }: any) => {
  return (
    <div className="py-8 grid md:grid-cols-2 gap-12 relative container">
      <div className="flex flex-col gap-4">
        <p className="text-3xl font-bold text-primary">Certifications</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-4 col-span-2">
            <div className="text-xs text-[#8C8585]">
              List out all the products that your business has to offer. This
              will help your potential buyers know what they could expect of
              your business.
            </div>
            {/* <div className="text-lg text-[#8C8585]">
              There are no certifications to be shown yet.
            </div> */}
          </div>
          <div className="flex justify-end items-end">
            <NewCertificate setCertifications={setCertifications}/>
          </div>
        </div>
          <div className="grid md:grid-cols-2 gap-10">
            {certifications.map((c: any, index: any) => {
              return (
                <div key={index} className="p-3 rounded-lg border border-gray-200">
                  <div className="grid grid-cols-2 font-bold ">
                    <p>Certificate</p>
                    <p className="col-span-1">{c["certificate"]?.name}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Certificate Number</p>
                    <p className="col-span-1">{c?.certificate_number}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Organization</p>
                    <p className="col-span-1">{c?.organization}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Date Issued</p>
                    <p className="col-span-1">{c?.date_issued}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>From</p>
                    <p className="col-span-1">{c?.valid_from}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>To</p>
                    <p className="col-span-1">{c?.valid_to}</p>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
};
export default CertificateTab;

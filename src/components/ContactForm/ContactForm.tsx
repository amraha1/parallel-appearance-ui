"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textareacontactform";

export const ContactForm = () => {
  return (
    <form className="bg-[#1B1F23] p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-white">Make a Free Consulting</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <Input
            placeholder="First Name"
            className="bg-[#1B1F23] border-[#2A2F34] text-white"
          />
        </div>
        <div>
          <Input
            placeholder="Last Name"
            className="bg-[#1B1F23] border-[#2A2F34] text-white"
          />
        </div>
      </div>

      <div className="mb-4">
        <Input
          placeholder="Company/Organization"
          className="bg-[#1B1F23] border-[#2A2F34] text-white"
        />
      </div>

      <div className="mb-4">
        <Input
          type="email"
          placeholder="Email"
          className="bg-[#1B1F23] border-[#2A2F34] text-white"
        />
      </div>

      <div className="mb-4">
        <Input
          type="tel"
          placeholder="Phone"
          className="bg-[#1B1F23] border-[#2A2F34] text-white"
        />
      </div>

      <div className="mb-6">
        <Textarea
          placeholder="Message"
          className="bg-[#1B1F23] border-[#2A2F34] text-white min-h-[120px]"
        />
      </div>

      <Button className="w-full bg-[#00DC82] hover:bg-[#00DC82]/90 text-black">
        Submit
      </Button>
    </form>
  );
};
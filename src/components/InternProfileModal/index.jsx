import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { DialogClose } from "@radix-ui/react-dialog";

const InternProfileModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Contact Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Details</DialogTitle>
          <DialogDescription>
            {/* Make changes to your profile here. Click save when you're done. */}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              <FontAwesomeIcon icon={faPhone} />
            </Label>
            <Input id="phone" value="+1234567890" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              <FontAwesomeIcon icon={faEnvelope} />
            </Label>
            <Input id="email" value="pedro@example.com" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </Label>
            <Input id="address" value="123 Main St, Anytown" className="col-span-3" />
          </div>
        </div>
        <DialogClose className="flex justify-end">
          <Button type="submit">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default InternProfileModal;
